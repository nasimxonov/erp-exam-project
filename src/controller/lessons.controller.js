import lessonService from "../service/lesson.service.js";

class LessonController {
  constructor() {
    this.service = new lessonService();
  }

  async createLessons(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createLesson(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { groupId } = req.params;
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const data = await this.service.getAll(groupId, endDate, startDate);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default LessonController;