import { Response } from "express";
import argon2 from "argon2";
import prisma from "../utils/prisma";
import tokenGenerator from "../utils/token";
import Mailer from "../utils/Mailer";

class AuthService {
  async register(
    email: string,
    name: string,
    password: string,
    EMAIL: string,
    EMAIL_PASSWORD: string,
  ) {
    const hashedPassword: string = await argon2.hash(password);
    const token: string = tokenGenerator(10);
    try {
      const user = await prisma.user.create({
        data: {
          email,
          name: name ? name : "",
          password: hashedPassword,
          verificationCode: token,
        },
      });
      new Mailer(EMAIL, EMAIL_PASSWORD).sendMail(email, token);
      return user;
    } catch (error) {
      return console.log(error);
    }
  }
  async login(email: string, password: string, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) return res.sendStatus(401);
      const decryptedPassword = await argon2.verify(user.password, password);
      return decryptedPassword
        ? res.status(200).json({
            data: user,
          })
        : res.sendStatus(403);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  async emailVerification(token: string, email: string, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) return res.sendStatus(401);
      if (user && user.verificationCode === token) {
        const updatedUser = await prisma.user.update({
          where: {
            email,
          },
          data: {
            isVerified: true,
          },
        });
        return updatedUser
          ? res.status(200).json({
              data: updatedUser,
            })
          : res.sendStatus(403);
      }
    } catch (error) {
      return console.log(error);
    }
  }
}

export default AuthService;
