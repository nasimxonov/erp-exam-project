import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import LessonController from "../controller/lessons.controller.js";

const LessonRoute = Router();

const controller = new LessonController();

LessonRoute.post(
  "/lessons",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin"),
  (req, res, next) => controller.createLessons(req, res, next)
);

LessonRoute.get(
  "/groups/:id/lessons",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin", "teacher"),
  (req, res, next) => controller.getAll(req, res, next)
);
export default LessonRoute;
