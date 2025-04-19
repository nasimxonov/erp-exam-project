import { PaymentModel } from "../models/payment.model.js";

import mongoose from "mongoose";
class paymentService {
  constructor() {
    this.model = PaymentModel;
  }

  async createPayment(data) {
    try {
      const create = await this.model.create(data);
      const lookupData = await this.model.aggregate([
        {
          $match: { _id: create._id },
        },
        {
          $lookup: {
            from: "groups",
            localField: "group_id",
            foreignField: "_id",
            as: "groups",
          },
        },
        {
          $unwind: {
            path: "$groups",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "students",
            localField: "student_id",
            foreignField: "_id",
            as: "students",
          },
        },
        {
          $unwind: {
            path: "$students",
            preserveNullAndEmptyArrays: true,
          },
        },
      ]);
      return lookupData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default paymentService;