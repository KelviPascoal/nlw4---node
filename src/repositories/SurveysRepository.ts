import { getRepository } from "typeorm";
import { Surveys } from "../entities/Surveys";

interface IRequest {
  title: string;
  description: string;
  id: string;
}

export class SurveysRepository {
  public ormRepository = getRepository(Surveys);

  async create({ title, description, id }: IRequest): Promise<Surveys> {
    const surveysCreated = this.ormRepository.create({title, description, id});
    const wtf = await this.ormRepository.save(surveysCreated);
    console.log(wtf);
    
    return surveysCreated;
  }

  async find(): Promise<Surveys[]> {
    const surveys = await this.ormRepository.find();
    return surveys;
  }

  async findbyId(id: string): Promise<Surveys | undefined> {
    const survey = await this.ormRepository.findOne({ where: { id: id }});
    return survey;
  }
}
