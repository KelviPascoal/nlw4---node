import { User } from "../entities/User";
import { getRepository } from "typeorm";

interface IRequest {
  name: string;
  email: string;
  id: string;
}

export class UserRepository {
  public ormRepository = getRepository(User);

  async create({ name, email, id }: IRequest): Promise<User> {
    const userCreated = this.ormRepository.create({ name, email, id });
    await this.ormRepository.save(userCreated);
    return userCreated;
  }

  async findById(id: string) {
      const userFound = await this.ormRepository.findOne({where: {id: id}});
      return userFound;
  }

  async findByEmail(email: string) {
    const userFound = await this.ormRepository.findOne({where: {email: email}});
    return userFound;
}


}
