import { Request, Response } from "express";
import UserService from "../services/user-service";
import { UserUpdateInterface } from "../types/user-interface";

const userService = new UserService();

class UserController {
  public async getAllUsersHandler(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json({
        data: users,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async getSingleUserHandler(req: Request, res: Response) {
    try {
      const id = req.body.id as number;
      const user = await userService.getUser(id);
      return res.status(200).json({
        data: user,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async updateUserHandler(req: Request, res: Response) {
    try {
      const { id, email, name }: UserUpdateInterface = req.body;
      const updatedUser = await userService.updateUser(id, email, name);
      return res.status(200).json({
        data: updatedUser,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async deleteUserHandler(req: Request, res: Response) {
    try {
      const id = req.body.id as number;
      const deletedUser = await userService.deleteUser(id);
      return res.status(200).json({
        data: deletedUser,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default UserController;
