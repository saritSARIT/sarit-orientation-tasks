import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { isError } from "joi";

export const errorHandler = (
  error: unknown,
  request: Request,
  response: Response,
): void => {
  const message = isError(error) ? error.message : "Internal server error";
  response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};
