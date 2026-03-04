import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { isError } from "joi";

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const message = isError(error) ? error.message : "Internal server error";
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};
