import mongoose from "mongoose";

const attendanceDetailSchema = new mongoose.Schema(
  {
    attendance_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attendance",
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    status: {
      type: String,
      enum: ["present", "absent", "late"],
    },
    comment: String,
  },
  { timestamps: true }
);

attendanceDetailSchema.index(
  { attendance_id: 1, student_id: 1 },
  { unique: true }
);

export const AttendanceDetailmodel = mongoose.model(
  "AttendanceDetail",
  attendanceDetailSchema
);
