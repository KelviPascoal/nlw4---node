import { Router } from "express";
import { AnswerController } from "../controllers/AnswerController";

export const aswersRouter = Router();
const aswersController = new AnswerController()

aswersRouter.get('/:value', aswersController.execute)

// 