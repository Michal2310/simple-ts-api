import prisma from "../utils/prisma";
class UserService {
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      return console.log(error);
    }
  }
  async getUser(id: number) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return console.log(error);
    }
  }
  async updateUser(id: number, email: string, name: string) {
    try {
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          email,
          name,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return console.log(error);
    }
  }
  async deleteUser(id: number) {
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return console.log(error);
    }
  }
}

export default UserService;
