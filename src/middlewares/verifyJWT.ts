import { NextFunction, Request, Response } from "express";

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) {
        return res.status(401).json({ response: "You are not authenticated"})
    }
    next()
}