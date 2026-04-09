import dotenv from "dotenv";
import { throwError } from "./utils/errors";
import type { SignOptions } from "jsonwebtoken";

dotenv.config();

export const config = {
  port: process.env.PORT ?? "3000",

  frontedUrl:
    process.env.FRONTED_URL ??
    throwError("Missing FRONTED_URL in environment variables"),

  databaseUri:
    process.env.DATABASE_URI ??
    throwError("Missing DATABASE_URI in environment variables"),

  jwtSecret:
    process.env.JWT_SECRET ??
    throwError("Missing JWT_SECRET in environment variables"),

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  jwtExpiresIn: process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"] ?? "1h" ,
};
