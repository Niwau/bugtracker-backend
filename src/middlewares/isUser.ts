import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { User } from "./isAdmin";

export const isUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers?.authorization

  const user = jwt.decode(token!) as User
  
  if (user.role != 'User') {
    return res.status(401).json({ response: "You are not authorized" })
  }

  res.locals.userId = user.id;
  
  next()

}