import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
    },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const CourseModel = mongoose.model("Course", courseSchema);