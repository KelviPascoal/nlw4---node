import { Surveys } from "../entities/Surveys";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { uuid } from "uuidv4";

export class CreateSurveysService {
  async execute(title: string, description: string ): Promise<Surveys > {
    const surveysRepository = new SurveysRepository()
    const surveysCreated = await surveysRepository.create({
      title,
      description,
       id: uuid()
      });

    return surveysCreated;
  }
}