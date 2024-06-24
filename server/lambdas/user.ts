import { APIGatewayProxyEvent} from "aws-lambda";
import * as dotenv from 'dotenv'
import { UserServ } from "../service/user";
import mongoose from "mongoose";
dotenv.config()


export async function user(event: APIGatewayProxyEvent){
    await mongoose.connect(process.env.MONGODB_URL!)
    
    const result = await UserServ.createUser(event)
    return result
   
  };

 