import { Router } from "express";
import {
  createServicePurchased,
  getAllServicePurchased,
  searchServicePurchased,
  getAllServicePurchasedByCompany,
  createPhonePePayment,
  checkPhonePePaymentStatus
} from "../service-purchased/service-purchased-controller.js";

const router = Router();

router.post("/create-service-purchased", createServicePurchased);

router.get("/get-all-service-purchased", getAllServicePurchased);

router.get("/get-all-service-purchased-by-company/:id", getAllServicePurchasedByCompany);

router.post("/search-service-purchased/:term", searchServicePurchased);

router.post("/make-payment", createPhonePePayment);

router.post("/check-payment-status/:merchantTransactionId/:merchantId", checkPhonePePaymentStatus);


export default router