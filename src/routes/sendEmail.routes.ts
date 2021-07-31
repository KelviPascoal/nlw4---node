import { SendEmailController } from "../controllers/SendEmailController";
import { Router } from "express";

export const sendEmailRouter = Router();
const sendEmailController = new SendEmailController()

sendEmailRouter.post('/', sendEmailController.execute)

// 