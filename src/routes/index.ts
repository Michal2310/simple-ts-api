import { Router } from "express";
import post from "./post";
import user from "./user";
import auth from "./auth";

const router = Router();

router.use("/post", post);
router.use("/user", user);
router.use("/auth", auth);

export default router;
