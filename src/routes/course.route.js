import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import CourseController from "../controller/course.controller.js";

const CourseRout = Router();
const controller = new CourseController();

CourseRout.post(
  "/create/course",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin"),
  (req, res, next) => controller.createController(req, res, next)
);

export default CourseRout;
