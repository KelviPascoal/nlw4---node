import { Surveys } from "../entities/Surveys";
import { Request, Response } from "express";
import { CreateSurveysService } from "../services/CreateSurveysService";
import { FindSurveysService } from "../services/FindSurveysService";

export class SurveyController {
    async create(request: Request, response: Response) {
        const surveysService = new CreateSurveysService()
        const {title, description} = request.body;
        const surveysCreated = await surveysService.execute(String(title), String(description))
        return response.status(201).json(surveysCreated)
    }

    async find(request: Request, response: Response) {
        const surveysService = new FindSurveysService()
        const surveys = await surveysService.execute()
        return response.status(201).json(surveys)
    }
}