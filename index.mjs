
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import db from "./Config/db.js"


db.connection.once('open', () => {
  console.log('Database connected successfully!');
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

console.log({ filePath: path.join(__dirname, "/uploads") });

// Import routes
import userRoutes from "./src/users/users-routes.js";
import companyRoutes from "./src/company/company-routes.js";
import documentRoutes from "./src/document/document-routes.js";
import couponRoutes from "./src/coupon/coupon-routes.js";
import servicePurchasedRoutes from "./src/service-purchased/service-purchased-routes.js";
import userTransactionsRoutes from "./src/user-transactions/user-transactions-routes.js";
import superAdminRoutes from "./src/super-admin/super-admin-routes.js";
import testimonialRoutes from "./src/testimonials/testimonials-routes.js";
import newsletterRoutes from "./src/newsletter/newsletter-routes.js";
import payRoutes from "./src/payu/payu-routes.js";
import passportRoutes from "./src/passport/passport-routes.js";

// Use routes
app.use("/api/user", userRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/document", documentRoutes);
app.use("/api/passport", passportRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/service-purchased", servicePurchasedRoutes);
app.use("/api/user-transaction", userTransactionsRoutes);
app.use("/api/super-admin", superAdminRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/payu", payRoutes);



const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

export default app;
