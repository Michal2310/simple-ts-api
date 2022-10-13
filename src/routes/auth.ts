import { Router } from "express";
import AuthController from "../controllers/auth-controller";

const auth = Router();
const authController = new AuthController();

auth.post("/register", authController.registerHandler);
auth.post("/login", authController.loginHandler);
auth.get("/verify-email", authController.emailVerificationHandler);

export default auth;
