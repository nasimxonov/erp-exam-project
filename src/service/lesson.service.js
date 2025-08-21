import { AttendanceDetailmodel } from "../models/attendance_detail.model.js";
import { Attendancemodel } from "../models/attendance.model.js";
import { LessonModel } from "../models/lesson.model.js";

class lessonService {
  constructor() {
    this.model = LessonModel;
    this.AttendandanceDetailmodel = AttendanceDetailmodel;
    this.Attendancemodel = Attendancemodel;
  }

  async createLesson(data) {
    const createter = await this.model.create(data);
    const populateData = await this.model.aggregate([
      {
        $match: { _id: createter._id },
      },
      {
        $lookup: {
          from: "groups",
          localField: "group_id",
          foreignField: "_id",
          as: "groups",
        },
      },
      {
        $unwind: {
          path: "$groups",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    return populateData;
  }

  async getAll(id, endDate, startDate) {
    const data = await this.model.aggregate([
      {
        $match: {
          group_id: id,
          lesson_date: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $lookup: {
          from: "attendances", 
          localField: "_id",
          foreignField: "lesson_id",
          as: "attendances",
        },
      },
      {
        $unwind: "$attendances",
      },
      {
        $lookup: {
          from: "attendance_details", 
          localField: "attendances._id",
          foreignField: "attendance_id",
          as: "attendance_details",
        },
      },
      {
        $facet: {
          counts: [
            {
              $group: {
                _id: null,
                present: {
                  $sum: {
                    $cond: [
                      { $eq: ["$attendance_details.status", "present"] },
                      1,
                      0,
                    ],
                  },
                },
                late: {
                  $sum: {
                    $cond: [
                      { $eq: ["$attendance_details.status", "late"] },
                      1,
                      0,
                    ],
                  },
                },
                absent: {
                  $sum: {
                    $cond: [
                      { $eq: ["$attendance_details.status", "absent"] },
                      1,
                      0,
                    ],
                  },
                },
              },
            },
          ],
        },
      },
      {
        $project: {
          find: { $arrayElemAt: ["$_id", 0] },
          attendence: {
            total: {
              $sum: ["$counts.present", "$counts.late", "$counts.absent"],
            },
            present: "$counts.present",
            absent: "$counts.absent",
            late: "$counts.late",
          },
        },
      },
    ]);

    return data;
  }
}

export default lessonService;