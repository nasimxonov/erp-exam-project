import mongoose from "mongoose";
import { Attendancemodel } from "../models/attendance.model.js";
import { AttendanceDetailmodel } from "../models/attendance_detail.model.js";
import { LessonModel } from "../models/lesson.model.js";

class AttendanceDetailService {
  constructor() {
    this.attendanceDetailModel = AttendanceDetailmodel;
    this.attendanceModel = Attendancemodel;
    this.lessonModel = LessonModel;
  }

  async createAttendence(id, data, roleId) {
    try {
      const createD = await this.attendanceModel.create({
        lesson_id: id,
        created_by: roleId,
      });
      data = {
        attendance_id: createD._id,
        ...data,
      };
      const create = await this.attendanceDetailModel.create(data);
      return create;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(lesson_id) {
    try {
      const data = await this.lessonModel.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(lesson_id) },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            lesson_date: 1,
          },
        },
        {
          $lookup: {
            from: "attendances",
            foreignField: "lesson_id",
            localField: "_id",
            pipeline: [
              {
                $lookup: {
                  from: "attendancedetails",
                  foreignField: "attendance.id",
                  pipeline: [
                    {
                      count: {},
                    },
                  ],
                  localField: "attendance_id",
                  as: "attendance_detail",
                },
              },
            ],
            as: "attendance",
          },
        },
        {
          $unwind: "$attendance",
        },
      ]);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default AttendanceDetailService;