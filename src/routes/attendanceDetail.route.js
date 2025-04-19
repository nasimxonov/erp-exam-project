import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import AttendanceDetailController from "../controller/attendance.detail.controller.js";

const AttenenceDetailRoute = Router();

const controller = new AttendanceDetailController();

AttenenceDetailRoute.post(
  "/lessons/:id/attendance",
  AuthMiddleware,
  RoleMiddleware("teacher", "admin", "superadmin"),
  (req, res, next) => controller.createAttendence(req, res, next)
);
AttenenceDetailRoute.get(
  "/lessons/:id/attendance",
  AuthMiddleware,
  RoleMiddleware("superadmin", "admin"),
  controller.getAll.bind(controller)
);

export default AttenenceDetailRoute;