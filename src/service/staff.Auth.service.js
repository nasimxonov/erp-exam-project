import { StaffModel as StaffModel } from "../models/staffs.models.js";
import JWT from "./jwt.service.js";
import bcrypt from "bcrypt";

class staffAuthService {
  constructor() {
    this.jwt = new JWT();
    this.model = StaffModel;
  }

  async createstaff(body) {
    const hashedPassword = await bcrypt.hash(body.password, 12);
    body.password = hashedPassword;
    const create = await this.model.create(body);
    return create;
  }

  async loginStaff({ username, password }) {
    const findUsername = await this.model.findOne({ username: username });
    if (!findUsername) throw new Error("Ro'yxatdan o'tmagansiz!");
    const comparePassword = await bcrypt.compare(
      password,
      findUsername.password
    );
    if (!comparePassword)
      throw new Error("Username yoki Parol xato bo'lishi mumkin");
    const token = this.jwt.generateToken(findUsername.role, findUsername._id);
    return { findUsername, token };
  }
}

export default staffAuthService;