import staffAuthService from "../service/staff.Auth.service.js";

class StaffAuthController {
  constructor() {
    this.service = new staffAuthService();
  }

  async createStaff(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createstaff(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async loginStaff(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.loginStaff(body);
      res.status(200).json({ data: data.findUsername, token: data.token });
    } catch (error) {
      next(error);
    }
  }
}

export default StaffAuthController;