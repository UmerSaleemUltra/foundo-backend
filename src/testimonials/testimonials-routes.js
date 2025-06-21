import express from 'express';
import {
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
  getTestimonialByUser
} from './testimonials-controller.js';

const router = express.Router();


router.post("/create-testimonial", createTestimonial);

router.get("/get-all-testimonials", getAllTestimonials);

router.get("/get-testimonial-by-user/:id", getTestimonialByUser);

router.post("/update-testimonial/:id", updateTestimonial);

router.post("/delete-testimonial/:id", deleteTestimonial);

export default router