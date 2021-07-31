import { Request, Response } from "express";
import { uuid } from "uuidv4";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepistory } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import sendMailService from "../services/sendMailService";


export class SendEmailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = new UserRepository();
        const surveysRepository = new SurveysRepository();
        const surveysUsersRepository = new SurveysUsersRepistory();

        const userAreadyExists = await usersRepository.findByEmail(email);
        if (!userAreadyExists) {
            return response.status(400).json('User does not exists.')
        }

        const survey = await surveysRepository.findbyId(survey_id);
        if (!survey) {
            return response.status(400).json('Survey does not exists')
        }
        
        const surveyUser = await surveysUsersRepository.create({
            user_id: userAreadyExists.id,
            survey_id: survey_id,
            id: uuid()
        });

        await sendMailService.execute(email, survey.title, survey.description)

        return response.status(200).json(surveyUser)
    }
}