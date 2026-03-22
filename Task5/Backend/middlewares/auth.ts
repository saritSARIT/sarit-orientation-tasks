import { Request, Response, NextFunction } from "express";
import  jwt from "jsonwebtoken";
import { flow, get } from "lodash/fp";

export const auth = (request: Request, response: Response, next: NextFunction) => {
  const token = flow(
    get("headers.authorization"),
    (authHeader) => authHeader?.split(" ")[1]
  )(request);

  if (!token) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  try {
    request.user = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    next();
  } catch {
    return response.status(401).json({ message: "Invalid token" });
  }
};