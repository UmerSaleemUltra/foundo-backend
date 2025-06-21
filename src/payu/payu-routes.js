import { Router } from "express";
import {
  createHash,
  success,
  failure,
  createHashForServices
} from "./payu-controller.js";

const router = Router();

router.post("/hash", createHash);

router.post("/success", success);

router.post("/failure", failure);

router.post("/hash-for-services", createHashForServices);

export default router