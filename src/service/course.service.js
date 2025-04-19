import { CourseModel } from "../models/course.model.js";

class CourseService {
  constructor() {
    this.courseModel = CourseModel;
  }

  async createCourse(body) {
    const result = await this.courseModel.create(body);
    return result;
  }
}

export default CourseService;