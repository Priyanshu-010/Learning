import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
import { loginValidation, signupValidation } from "../middlewares/Auth.validation.js";

const router = express.Router();

router.post("/login", loginValidation,login)
router.post("/signup", signupValidation,signup)

export default router;