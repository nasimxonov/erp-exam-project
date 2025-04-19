import paymentService from "../service/payment.service.js";

class PaymentController {
  constructor() {
    this.service = new paymentService();
  }

  async createPayment(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.createPayment(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default PaymentController;