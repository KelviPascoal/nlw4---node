import { Request, Response } from "express";
import { SurveysUsersRepistory } from "../repositories/SurveysUsersRepository";

export class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveyUserRepository = new SurveysUsersRepistory();
    const surveysUsers = await surveyUserRepository.findSurvey(survey_id);

    const detractor = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    ).length;

    const promotors = surveysUsers.filter(
      (survey) => survey.value >= 9 && survey.value <= 10
    ).length;

    const passive = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8
    ).length;

    const totalAnswers = (detractor + promotors + passive);

    const calculate = Number((((promotors - detractor) / totalAnswers) * 100).toFixed(2));

    return response.json({
        detractor,
        promotors,
        passive,
        totalAnswers,
        nps: calculate,
    })

  }
}
