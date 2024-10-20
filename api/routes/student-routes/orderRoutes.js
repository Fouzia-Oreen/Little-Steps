import express from "express";
import {
  createOrder,
  capturePaymentAndFinalizeOrder,
} from "../../controllers/student-controllers/orderController";

const router = express.Router();

router.post("/create", createOrder);
router.post("/capture", capturePaymentAndFinalizeOrder);

module.exports = router;