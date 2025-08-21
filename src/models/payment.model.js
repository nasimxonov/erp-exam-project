import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    group_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
    amount: {
      type: Number,
      required: true,
    },
    payment_date: {
      type: Date,
      default: Date.now,
    },
    payment_method: {
      type: String,
      enum: ["cash", "card", "transfer"],
    },
    description: String,
    receipt_number: String,
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
    },
  },
  { timestamps: true }
);

export const PaymentModel = mongoose.model("Payment", paymentSchema);