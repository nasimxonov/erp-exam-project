import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: String,
    phone: String,
    address: String,
    birth_date: Date,
    status: {
      type: String,
      enum: ["active", "inactive", "graduated"],
      default: "active",
    },
    enrollment_date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const StudentModel = mongoose.model("Student", studentSchema);