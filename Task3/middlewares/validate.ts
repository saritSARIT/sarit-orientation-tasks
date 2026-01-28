import type { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { StatusCodes } from "http-status-codes";

export const validateRequest =
  (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req, { abortEarly: false });
    if (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: error.details[0].message,
      });
      return;
    }
    next();
  };
