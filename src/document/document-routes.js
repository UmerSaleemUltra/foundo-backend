import express from "express";
import {
  createDocument,
  updateDocument,
  deleteDocument,
  getAllDocuments,
  getDocumentsByCompany,
  searchDocuments,
  getDocumentsNameByCompany
} from "./document-controller.js";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/documents");
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidv4()}${file.originalname.substring(file.originalname.lastIndexOf('.'))}`);
    },
});

const upload = multer({ storage: storage });

router.post("/create-document", upload.single("file"), createDocument);

router.post("/update-document/:id", updateDocument);

router.post("/delete-document/:id", deleteDocument);

router.get("/get-all-document", getAllDocuments);

router.post("/get-documents-by-company/:id", getDocumentsByCompany);

router.post("/search-documents/:term", searchDocuments);

router.get("/get-documents-name-by-company/:id", getDocumentsNameByCompany);


export default router