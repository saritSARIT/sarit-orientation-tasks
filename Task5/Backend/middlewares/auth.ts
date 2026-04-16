import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { get, isNil } from "lodash/fp";
import { pipe } from "ts-functional-pipe";
import { StatusCodes } from "http-status-codes";
import { config } from "../config";

export const auth = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const token = pipe(
    get("headers.authorization"),
    (authHeader: string | undefined) => authHeader?.split(" ")[1],
  )(request);

  isNil(token) &&
    response.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });

  // Jwt throws an error so we have no choice but to use this
  // eslint-disable-next-line functional/no-try-statements
  try {
    //
    // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-unsafe-type-assertion, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  (request as any).user = jwt.verify(token!, config.jwtSecret) as {
      userId: string;
    };
    next();
  } catch {
    response
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid token" });
  }
};
