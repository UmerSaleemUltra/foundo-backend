import express from "express";
const router = express.Router();

import authenticate from "../../middleware/auth.js";

import {
  sendOtpToUserRegister,
  verifyOtpToUserRegister,
  userLogin,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
  changeUserPassword,
  changeUserPasswordByAdmin,
  sendResetPasswordEmail,
  resetPassword,
  searchUser,
  changeUserEmail,
  verifyOtpForChangeEmail,
  getExchangeRate,
  getAllUsersForOption
} from "./users-controller.js";


router.post("/send-otp-to-register-user", sendOtpToUserRegister);

router.post("/verify-otp-to-register-user", verifyOtpToUserRegister);

router.post("/user-login", userLogin);

router.post("/create-user", createUser);

router.post("/update-user/:id", updateUser);

router.post("/delete-user/:id", deleteUser);

router.get("/get-all-users", getAllUsers);

router.get("/get-all-users-for-options", getAllUsersForOption);

router.get("/get-user", authenticate, getUser);

router.post("/send-link-for-reset-password", sendResetPasswordEmail);

router.post("/reset-password", resetPassword);

router.post("/search-user/:term", searchUser);

router.post("/change-user-password/:id", changeUserPassword);

router.post("/change-user-password-by-admin/:id", changeUserPasswordByAdmin);

router.post("/change-user-email/:id", changeUserEmail);

router.post("/verify-otp-for-change-email", verifyOtpForChangeEmail);

router.get("/get-exchange-rate", getExchangeRate);

export default router