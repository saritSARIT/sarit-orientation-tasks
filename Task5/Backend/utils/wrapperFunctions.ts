import type { Request, Response, NextFunction } from "express";

export const warpController =
  (fn: Function) => (request: Request, response: Response, next: NextFunction) => {
    Promise.resolve(fn(request, response, next)).catch(next);
  };
