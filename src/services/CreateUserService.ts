import { uuid } from "uuidv4";
import { User } from "../entities/User";
import {UserRepository} from '../repositories/UserRepository'

interface IRequest {
  name: string;
  email: string;
}

export class CreateUserService {
  async execute({ name, email }: IRequest): Promise<User> {
    const userRepository = new UserRepository()
    const userCreated = await userRepository.create({
       name,
       email,
       id: uuid()
      });

    return userCreated;
  }
}