import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middlewar.js";
import PaymentController from "../controller/payment.controller.js";

const paymentRoute = Router();
const controller = new PaymentController();

paymentRoute.post(
  "/payments",
  AuthMiddleware,
  RoleMiddleware("admin", "superadmin"),
  (req, res, next) => controller.createPayment(req, res, next)
);

export default paymentRoute;
