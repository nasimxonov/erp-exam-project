import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import GroupController from "../controller/group.controller.js";

const groupRoute = Router();

const controller = new GroupController();

groupRoute.post(
  "/groups",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin"),
  (req, res, next) => controller.creategroup(req, res, next)
);

export default groupRoute;