import { Router } from "express";
import multer from "multer";
import { PostController } from "./controller/PostController";
import uploadsConfig from "./config/multer";

const postController = new PostController();

const upload = multer(uploadsConfig);

export const router = Router();
router.post("/", upload.array("images"), postController.store);
