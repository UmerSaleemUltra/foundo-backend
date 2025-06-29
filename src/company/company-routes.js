import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/passports");
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidv4()}${file.originalname.substring(file.originalname.lastIndexOf('.'))}`);
    },
});

const upload = multer({ storage: storage });

import {
  createCompany,
  updateCompany,
  deleteCompany,
  getAllCompany,
  getCompanyByUser,
  getCompanyStats,
  createMember,
  updateMember,
  updateMemberWithPassport,
  deleteMember,
  searchCompany,
  sendCompanyFormed,
  createPhonePePayment,
  checkPhonePePaymentStatus,
  getAllCompanyForOption
} from "./company-controller.js";


router.post("/create-company", upload.any(), createCompany);

router.post("/update-company/:id", updateCompany);

router.post("/delete-company/:id", deleteCompany);

router.get("/get-all-company", getAllCompany);

router.get("/get-company-by-user/:id", getCompanyByUser);

router.get("/get-company-stats/:id", getCompanyStats);

router.post("/create-member/:id", upload.single("passport"), createMember);

router.post("/update-member/:id", updateMember);

router.post("/update-member-with-passport/:id", upload.single("passport"), updateMemberWithPassport);

router.post("/delete-member/:id", deleteMember);

router.post("/search-company/:term", searchCompany);

router.post("/send-company-formed-mail", sendCompanyFormed);

router.post("/make-payment", createPhonePePayment);

router.post("/check-payment-status/:merchantTransactionId/:merchantId", checkPhonePePaymentStatus);

router.get("/get-all-companies-for-options", getAllCompanyForOption);

router.post("/upload-passport/:id", upload.single("passport"), updateMemberWithPassport);

export default router