import prisma from "../utils/prisma";

class PostService {
  async createPost(title: string, authorId: number) {
    try {
      const post = await prisma.post.create({
        data: {
          title,
          authorId,
        },
      });
      return post;
    } catch (error) {
      console.log({ error });
      return;
    }
  }
  async getAllPosts() {
    try {
      const posts = await prisma.post.findMany();
      return posts;
    } catch (error) {
      return console.log(error);
    }
  }
  async getOnePost(id: number) {
    try {
      const post = await prisma.post.findUnique({
        where: {
          id,
        },
      });
      return post;
    } catch (error) {
      return console.log(error);
    }
  }
  async updatePost(id: number, title: string, published: boolean) {
    try {
      const post = await prisma.post.update({
        where: {
          id,
        },
        data: {
          title,
          published,
        },
      });
      return post;
    } catch (error) {
      console.log(error);
      return console.log(error);
    }
  }
  async deletePost(id: number) {
    try {
      const post = await prisma.post.delete({
        where: {
          id,
        },
      });
      return post;
    } catch (error) {
      console.log(error);
      return console.log(error);
    }
  }
}

export default PostService;
