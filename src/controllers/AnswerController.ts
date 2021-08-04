import { Request, Response } from "express";
import { SurveysUsersRepistory } from "../repositories/SurveysUsersRepository";


export class AnswerController {

    async execute(request: Request, response: Response) {
        const surveysUsersRepository = new SurveysUsersRepistory();

        const { value } = request.params;
        const { u } = request.query;

        const surveyUser = await surveysUsersRepository.findById(String(u))

        if (!surveyUser) {
            return response.status(400).json({error:  "Survey User does not exists!"})
        }

        surveyUser.value = Number(value)

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)
    }
}