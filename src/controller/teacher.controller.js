import teacherService from "../service/teacher.service.js";

class TeachersContoller {
  constructor() {
    this.service = new teacherService();
  }

  async createTeacher(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createStaff(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async loginTeacher(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.loginStaff(body);
      res.status(200).json({ data: data.findUsername, token: data.token });
    } catch (error) {
      next(error);
    }
  }
}

export default TeachersContoller;