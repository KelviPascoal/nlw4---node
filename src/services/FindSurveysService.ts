import { Surveys } from "../entities/Surveys";
import { SurveysRepository } from "../repositories/SurveysRepository";

export class FindSurveysService {
  async execute(): Promise<Surveys[]> {
    const surveysRepository = new SurveysRepository()
    const surveysCreated = await surveysRepository.find();

    return surveysCreated;
  }
}