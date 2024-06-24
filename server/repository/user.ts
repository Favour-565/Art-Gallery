import { APIGatewayProxyEvent } from "aws-lambda";
import { User } from "../model/user";
import { IUSER } from "../types/user";
import { BadRequestError, ServerError } from "../utils/error";
import { UserSchema } from "../validation/user";
import { BaseRepository } from "./base";
import { sendVerificationEmail } from "../utils/sendEmail";
import { generateOTP } from "../utils/otp";

class UserRepository extends BaseRepository {

  async createUser(event: APIGatewayProxyEvent) {
    try {
      const { error, value } =  UserSchema.validate(JSON.parse(event.body || '{}'));

      if (error) {
        return BadRequestError.ErrorMessage(error.details[0].message);
      }

    const user = await User.findOne({email:value.email})

        if(user){
            return BadRequestError.ErrorMessage("User already exists")
        }

      const { otp, expiry } = generateOTP();

      await User.create({
        otp,
        otp_expiry: expiry,
        ...value
      });


      await sendVerificationEmail(value.email, otp)

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "User created successfully",
        }),
      };
    } catch (err: any) {
      return ServerError.ErrorMessage(err.message);
    }
  }

  async verifyUser(event: APIGatewayProxyEvent) {
    try{
      const {otp} = JSON.parse(event.body || '{}')

    }catch(err:any){
      return ServerError.ErrorMessage(err.message);
    }
  }
}

export const UserRepo = new UserRepository();
