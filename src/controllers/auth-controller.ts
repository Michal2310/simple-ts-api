import { Request, Response } from "express";
import { BodyRequest, Login, QueryRequest } from "../types/auth-interface";
import AuthService from "../services/auth-service";
import dotenv from "dotenv/config";
const authService = new AuthService();

class AuthController {
  public async registerHandler(req: Request, res: Response) {
    try {
      const { EMAIL, EMAIL_PASSWORD } = process.env;
      const { email, name, password }: BodyRequest = req.body;

      const register = await authService.register(
        email,
        name,
        password,
        EMAIL,
        EMAIL_PASSWORD,
      );
      return res.status(200).json({
        data: register,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async loginHandler(req: Request, res: Response) {
    try {
      const { email, password }: Login = req.body;
      await authService.login(email, password, res);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async emailVerificationHandler(
    req: Request<{}, {}, {}, QueryRequest>,
    res: Response,
  ) {
    try {
      const { token, email } = req.query;
      await authService.emailVerification(token, email, res);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default AuthController;
