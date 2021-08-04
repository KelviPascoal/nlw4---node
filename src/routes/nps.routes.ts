import { Router } from "express";
import { NpsController } from "../controllers/NpsController";

export const npsRouter = Router();
const npsController = new NpsController()

npsRouter.get('/:survey_id', npsController.execute)

// 