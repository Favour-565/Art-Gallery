import { APIGatewayProxyEvent } from "aws-lambda";
import { UserRepo } from "../repository/user";


class UserService  {
    async createUser(event: APIGatewayProxyEvent){
        return await UserRepo.createUser(event)
    }
}

export const UserServ = new UserService()