import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import StudentController from "../controller/student.controller.js";

const StudentRoute = Router();
const controller = new StudentController();

StudentRoute.get(
  "/students",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin"),
  (req, res, next) => controller.getAll(req, res, next)
);

export default StudentRoute;
