import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export interface User {
  role: 'Admin' | 'User'
  id: number
  name: string
} 

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers?.authorization

  const user = jwt.decode(token!) as User

  if (user.role != 'Admin') {
    return res.status(401).json({ response: "You are not authorized" })
  }

  next()

}