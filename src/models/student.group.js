import mongoose from "mongoose";
const studentGroupSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    group_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
    join_date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "completed"],
      default: "active",
    },
  },
  { timestamps: true }
);

studentGroupSchema.index({ student_id: 1, group_id: 1 }, { unique: true });

export const StudentGroupModel = mongoose.model(
  "StudentGroup",
  studentGroupSchema
);