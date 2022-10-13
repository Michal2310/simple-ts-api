import { Router, Request, Response } from "express";
import PostController from "../controllers/post-controller";

const post = Router();
const postController = new PostController();

post.get("/", postController.getAllPostsHandler);
post.get("/:id", postController.getSinglePostHandler);
post.post("/", postController.createPostHandler);
post.patch("/:id", postController.updatePostHandler);
post.delete("/:id", postController.deletePostHandler);
export default post;
