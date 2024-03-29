import { NextFunction, Request, Response } from "express";
import { HttpRequest } from "../../protocols/http";
import { Middleware } from "../../protocols/Middleware";

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httRequest: HttpRequest = {
      headers: req.headers,
    };
    const httpResponse = await middleware.handle(httRequest);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
};
