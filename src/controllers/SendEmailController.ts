import { Request, Response } from "express";
import { uuid } from "uuidv4";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepistory } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import sendMailService from "../services/sendMailService";
import {resolve} from 'path'


export class SendEmailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = new UserRepository();
        const surveysRepository = new SurveysRepository();
        const surveysUsersRepository = new SurveysUsersRepistory();

        const user = await usersRepository.findByEmail(email);
        if (!user) {
            return response.status(400).json('User does not exists.')
        }

        const survey = await surveysRepository.findbyId(survey_id);
        if (!survey) {
            return response.status(400).json('Survey does not exists')
        }
        
        const surveyUser = await surveysUsersRepository.create({
            user_id: user.id,
            survey_id: survey_id,
            id: uuid()
        });

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");
        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            id: surveyUser.id,
            link: process.env.URL_MAIL
        }

        await sendMailService.execute(email, survey.title , variables, npsPath)

        return response.status(200).json(surveyUser)
    }
}