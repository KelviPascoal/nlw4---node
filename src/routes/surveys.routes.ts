import { Router } from "express";
import { SurveyController } from "../controllers/SurveyController";

export const surveysRouter = Router();
const surveyController = new SurveyController()

surveysRouter.post('/', surveyController.create)
surveysRouter.get('/', surveyController.find)
