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

import { uploadPassport, getPassport } from "./passport-controller.js";

router.post("/upload-passport", upload.single("file"), uploadPassport);

router.get("/get-passport/:id",  getPassport);

export default router