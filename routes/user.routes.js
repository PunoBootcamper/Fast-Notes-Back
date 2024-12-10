
import { Router } from "express";
import { getUser, login, register, uploadImage } from "../controller/user.controller.js";
import upload from "../upload.js";

export const userRouter = Router();

userRouter.post("/register", register )
userRouter.post("/login", login)
userRouter.put('/upload', upload.single('image'),uploadImage);
userRouter.get('/user', getUser);
userRouter.get('/test', (req, res) => {
  res.send('test')
})
  