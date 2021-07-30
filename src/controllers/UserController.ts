import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class UserController {
    async create(request: Request, response: Response) {
        console.log("asdasdasdasdasdas");
        
        const createUserService = new CreateUserService()
        const {name, email} = request.body;
        const userCreated = await createUserService.execute({name, email})
        response.status(200).json(userCreated)

    }
}