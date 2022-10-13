import { Request, Response } from "express";
import {
  CreatePostInterface,
  UpdatePostInterface,
} from "../types/post-interface";
import PostService from "../services/post-service";

const postService = new PostService();

class PostController {
  public async createPostHandler(req: Request, res: Response) {
    try {
      const { title, authorId }: CreatePostInterface = req.body;
      const post = await postService.createPost(title, authorId);
      return res.status(201).json({
        data: post,
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
  public async getAllPostsHandler(req: Request, res: Response) {
    try {
      const posts = await postService.getAllPosts();
      return res.status(200).json({
        data: posts,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async getSinglePostHandler(req: Request, res: Response) {
    try {
      const id = req.body.id as number;
      const post = await postService.getOnePost(id);
      return res.status(200).json({
        data: post,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async updatePostHandler(req: Request, res: Response) {
    try {
      const { id, title, published }: UpdatePostInterface = req.body;
      const post = await postService.updatePost(id, title, published);
      return res.status(200).json({
        data: post,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  public async deletePostHandler(req: Request, res: Response) {
    try {
      const id = req.body.id as number;
      const post = await postService.deletePost(id);
      return res.status(200).json({
        data: post,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default PostController;
