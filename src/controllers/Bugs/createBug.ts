import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createBug = async (req: Request, res: Response) => {
  try {
    const bug = await prisma.bug.create({
      data: {
        title: req.body.title,
        status: req.body.status,
        description: req.body.description,
        author: {
          connect: {
            id: res.locals.userId,
          },
        },
      },
    });

    return (
      res.status(201).json(bug)
    )
  } catch (error) {
    return (
      res.status(400).json({ response: "An error occurred." })
    )
  }
};
