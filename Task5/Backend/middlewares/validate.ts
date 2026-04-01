import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";
import { StatusCodes } from "http-status-codes";

export const validateRequest =
  (schema: ObjectSchema) =>
  (request: Request, response: Response, next: NextFunction): void => {
    const { error } = schema
      .unknown(true)
      .validate(request, { abortEarly: false });

    error
      ? response.status(StatusCodes.BAD_REQUEST).json({
          message: error.details[0].message,
        })
      : next();
  };
