import { TeacherModel } from "../models/teacher.model.js";
import JWT from "./jwt.service.js";
import bcrypt from "bcrypt";

class teacherService {
  constructor() {
    this.jwt = new JWT();
    this.model = TeacherModel;
  }

  async createStaff(body) {
    const create = (await this.model.create(body)).populate("staffId");
    return create;
  }

  async loginStaff({ username, password }) {
    const findUsername = await this.model.findOne({ username: username });
    if (!findUsername) throw new Error("OLdin ro'yxatdan o'ting");
    const comparePassword = await bcrypt.compare(
      password,
      findUsername.password
    );
    if (!comparePassword) throw new Error("Username yoki parolda xatolik bor");
    const token = this.jwt.generateToken(findUsername.role, findUsername._id);
    return { findUsername: findUsername, token };
  }
}

export default teacherService;