import { Router } from "express";
import TeachersContoller from "../controller/teacher.controller.js";

const RoutTeacher = Router();
const controller = new TeachersContoller();

RoutTeacher.post("/create/teacher", (req, res, next) =>
  controller.createTeacher(req, res, next)
);

export default RoutTeacher;