import { Request, RequestHandler, Response } from "express";

export const checkAPI: RequestHandler = (req: Request, res: Response) => {
  res.status(201).send("API is up, not JSON");
};
