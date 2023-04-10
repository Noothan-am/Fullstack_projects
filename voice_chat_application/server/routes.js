import express from "express";
import controllers from "./controllers/authController.js";
const router = express.Router();

// we are getting callback functions from controllers folder
router.post("/send-otp", controllers.sendOtp);
router.post("/otp-verify", controllers.verifyOtp);




export default router;