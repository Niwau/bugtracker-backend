import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const createBug = async (req : Request, res: Response) => {

  if (!req.body.title) {
    return res.status(400).json({ response: "Missing bug title in body" })
  }

  if (!req.body.status) {
    return res.status(400).json({ response: "Missing bug status in body" })
  }

  if (!req.body.description) {
    return res.status(400).json({ response: "Missing bug description in body" })
  }

  const bug = await prisma.bug.create({
    data: {
      title: req.body.title,
      status: req.body.status,
      description: req.body.description,
      author: {
        connect: {
          id: req.body.authorId
        }
      }
    }
  })

  return res.status(200).json({ created: bug })

}