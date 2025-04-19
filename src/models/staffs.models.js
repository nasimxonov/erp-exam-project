import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
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
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["superadmin", "admin", "teacher"],
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    phone: String,
    address: String,
    hire_date: { type: Date, default: Date.now },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export const StaffModel = mongoose.model("Staff", staffSchema);