import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    enum: ["Oliy", "O'rta maxsus", "Texnikum", "Boshlang'ich"],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const TeacherModel = mongoose.model("Teacher", teacherSchema);