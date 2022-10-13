import { Router, Request, Response } from "express";
import UserController from "../controllers/user-controller";

const user = Router();
const userController = new UserController();

user.get("/", userController.getAllUsersHandler);
user.get("/:id", userController.getSingleUserHandler);
user.patch("/:id", userController.updateUserHandler);
user.delete("/:id", userController.deleteUserHandler);

export default user;
