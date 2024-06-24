import * as Joi from "joi";

export const UserSchema = Joi.object({
    firstName: Joi.string().required(),
    surName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
})