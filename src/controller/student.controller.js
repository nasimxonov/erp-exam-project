import StudentService from "../service/student.service.js";

class StudentController {
  constructor() {
    this.service = new StudentService();
  }

  async getAll(req, res, next) {
    try {
      const data = await this.service.getAllStudents();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default StudentController;