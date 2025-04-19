import CourseService from "../service/course.service.js";

class CourseController {
  constructor() {
    this.service = new CourseService();
  }

  async createController(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createCourse(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default CourseController;