import { Router } from "express";
import { userRouter } from "./UserRouter";

export const routes = Router();

routes.use('/users', userRouter)