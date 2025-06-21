import express from "express";
import {
  createNewsletter,
  getAllNewsletters,
  getExportedNewslettersData
} from "./newsletter-controller.js";

const router = express.Router();


router.post("/create-newsletter", createNewsletter);

router.get("/get-all-newsletters", getAllNewsletters);

router.post("/get-export-data", getExportedNewslettersData);

export default router