import { Router } from "express";
import StaffAuthController from "../controller/staff.auth.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";

const authStaffRoute = Router();
const controller = new StaffAuthController();

authStaffRoute.post(
  "/register/staff",
  AuthMiddleware,
  RoleMiddleware("superadmin"),
  (req, res, next) => controller.createStaff(req, res, next)
);
authStaffRoute.post("/login/staff", (req, res, next) =>
  controller.loginStaff(req, res, next)
);

export default authStaffRoute;
