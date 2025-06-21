import { Router } from "express";
import {
  createCoupon,
  getAllCoupon,
  deleteCouponByID,
  updateCouponByID,
  getCoupon,
  searchCoupons
} from "./coupon-controller.js";


const router = Router();

router.post("/create-coupon", createCoupon);

router.get("/get-all-coupons", getAllCoupon);

router.post("/get-coupon", getCoupon);

router.post("/delete-coupon/:id", deleteCouponByID);

router.post("/update-coupon/:id", updateCouponByID);

router.post("/search-coupons/:term", searchCoupons);


export default router