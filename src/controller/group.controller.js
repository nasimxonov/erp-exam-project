import groupService from "../service/group.service.js";

class GroupController {
  constructor() {
    this.service = new groupService();
  }

  async creategroup(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createGroup(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default GroupController;