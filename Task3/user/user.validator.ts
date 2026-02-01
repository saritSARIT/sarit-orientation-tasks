import Joi from "joi";

export const createUserSchema = Joi.object({
    username: Joi.string().required(),
    displayedName: Joi.string().required(),
  }).required();

