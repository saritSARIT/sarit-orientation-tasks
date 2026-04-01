import dotenv from "dotenv";

dotenv.config();

const throwError = (message: string): never => {
  throw new Error(message);
};

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

  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "1h",
};