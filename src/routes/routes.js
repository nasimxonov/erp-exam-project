import AttenenceDetailRoute from "./attendanceDetail.route.js";
import AuthStaffRoute from "./auth.staffs.route.js";
import AuthStudentRoute from "./auth.student.route.js";
import CourseRoute from "./course.route.js";
import GroupRoute from "./group.route.js";
import LessonRoute from "./lessons.route.js";
import PaymentRoute from "./payment.route.js";
import StudentRoute from "./student.route.js";
import RoutTeacher from "./teacher.route.js";

const Routes = () => [
  AuthStaffRoute,
  CourseRoute,
  AuthStudentRoute,
  StudentRoute,
  RoutTeacher,
  LessonRoute,
  GroupRoute,
  AttenenceDetailRoute,
  PaymentRoute,
];
export default Routes;
