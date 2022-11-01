import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers?.authorization

  if (!token) {
    return res.status(401).json({ response: "You are not authenticated" });
  }

  jwt.verify(token, process.env.SECRET!, (err, jwt) => {
    if (err) {
      return res.status(401).json({ error: err })
    }
  })

  next();
};
