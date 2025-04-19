import { GroupModel } from "../models/group.model.js";

class groupService {
  constructor() {
    this.model = GroupModel;
  }

  async createGroup(body) {
    const posted = (await this.model.create(body)).populate("course_id");

    const findPopulate = await this.model.aggregate([
      {
        $match: { _id: (await posted)._id },
      },
      {
        $lookup: {
          from: "courses",
          localField: "course_id",
          foreignField: "_id",
          as: "course",
        },
      },
      {
        $unwind: {
          path: "$course",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "staffs",
          localField: "teacher_id",
          foreignField: "_id",
          as: "staffs",
        },
      },
      {
        $unwind: {
          path: "$staffs",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);

    return findPopulate;
  }
}

export default groupService;