import express from "express";
import {
  createOrder,
  capturePaymentAndFinalizeOrder,
} from "../../controllers/student-controllers/orderController.js";

const router = express.Router();
// place order, accept order payment
router.post("/create", createOrder);
router.post("/capture", capturePaymentAndFinalizeOrder);

export default router;