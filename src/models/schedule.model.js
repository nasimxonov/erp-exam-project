import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    group_id: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    room_number: String,
  },
  { timestamps: true }
);

scheduleSchema.index({ group_id: 1, day: 1, start_time: 1 }, { unique: true });

export const ScheduleModel = mongoose.model("Schedule", scheduleSchema);