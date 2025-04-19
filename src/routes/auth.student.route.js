import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import StudentAuthController from "../controller/student.auth.controller.js";

const AuthStudentRout = Router();
const controller = new StudentAuthController();

AuthStudentRout.post(
  "/auth/student/register",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin"),
  (req, res, next) => controller.createStudent(req, res, next)
);
AuthStudentRout.post("/auth/login/student", (req, res, next) =>
  controller.loginStudent(req, res, next)
);
export default AuthStudentRout;