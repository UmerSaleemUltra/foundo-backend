import express from 'express';
const router = express.Router();

import {
  createSuperAdmin,
  updateSuperAdminByID,
  superAdminLogin,
  changePassword,
  sendResetPasswordEmail,
  resetPassword,
  getDashboardStats,
  handleContactMessage,
  accessUser,
  sendEinProceededMail
} from './super-admin-controller.js';

router.post("/create-super-admin", createSuperAdmin);

router.post("/update-super-admin/:id", updateSuperAdminByID);

router.post("/super-admin-login", superAdminLogin);

router.get("/get-dashboard-stats", getDashboardStats);

router.post("/change-password-super-admin/:id", changePassword);

router.post("/send-reset-password-email", sendResetPasswordEmail);

router.post("/reset-password", resetPassword);

router.post("/send-contact-message", handleContactMessage);

router.post("/access-user", accessUser);

router.post("/send-ein-proceeded-mail", sendEinProceededMail);

export default router