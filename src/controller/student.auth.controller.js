import StaffStudentService from "../service/student.auth.service.js";

class StudentAuthController {
  constructor() {
    this.service = new StaffStudentService();
  }

  async createStudent(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createStudent(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async loginStudent(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.loginStudent(body);
      res.status(200).json({ data: data.findUsername, token: data.token });
    } catch (error) {
      next(error);
    }
  }
}

export default StudentAuthController;