import { SurveysUsers } from "../entities/SurveysUsers";
import { EntityRepository, getRepository, Repository } from "typeorm";

interface IRequest {
    user_id: string;
    survey_id: string;
    id: string;
}

@EntityRepository(SurveysUsers)
export class SurveysUsersRepistory {
    public ormRepository = getRepository(SurveysUsers)

    async create(data: IRequest): Promise<SurveysUsers> {
        const { user_id, survey_id, id } = data;
        const surveyUser = this.ormRepository.create({
            user_id,
            survey_id,
            id
        });
        await this.ormRepository.save(surveyUser);
        return surveyUser;
    }
}