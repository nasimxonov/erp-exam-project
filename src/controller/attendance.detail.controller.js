import AttendanceDetailService from "../service/attendanceDetail.service.js";

class AttendanceDetailController {
  constructor() {
    this.service = new AttendanceDetailService();
  }

  async createAttendence(req, res, next) {
    try {
      const { lessonId } = req.params;
      const { body } = req;
      const data = await this.service.createAttendence(
        lessonId,
        body,
        req.roleID
      );
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { lessonId } = req.params;
      const data = await this.service.getAll(lessonId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
export default AttendanceDetailController;