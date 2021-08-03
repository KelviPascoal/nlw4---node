import { SurveysUsers } from "../entities/SurveysUsers";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { Surveys } from "../entities/Surveys";

interface IRequest {
  user_id: string;
  survey_id: string;
  id: string;
}

interface IResponse {
  id: string;
  user_id: string;
  survey_id: string;
  value: number;
  created_at: Date;
  user: User;
  survey: Surveys;
}

@EntityRepository(SurveysUsers)
export class SurveysUsersRepistory {
  public ormRepository = getRepository(SurveysUsers);

  async create(data: IRequest): Promise<IResponse> {
    const { user_id, survey_id, id } = data;
    const surveyUserExist = await this.ormRepository.findOne({
      where: { user_id: user_id, survey_id: survey_id },
      relations: ["user", "survey"],
    });

    if (surveyUserExist) {
      await this.ormRepository.save(surveyUserExist);
      return surveyUserExist;
    }

    const surveyUser = this.ormRepository.create({
      user_id,
      survey_id,
      id,
    });
    await this.ormRepository.save(surveyUser);
    return surveyUser;
  }
}
