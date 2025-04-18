import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: Date,
    schedule: String,
    max_students: {
      type: Number,
      default: 20,
    },
    status: {
      type: String,
      enum: ["planned", "active", "completed"],
      default: "planned",
    },
  },
  { timestamps: true }
);

export const GroupModel = mongoose.model("Group", groupSchema);
