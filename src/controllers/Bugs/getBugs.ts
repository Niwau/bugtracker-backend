import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const getBugs = async (req : Request, res: Response) => {

  try {
    const bugs = await prisma.bug.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true,
            team: true,
            teamId: true,
          }
        }
      }
    })

    return (
      res.status(200).json(bugs)
    )

  } catch (error) {
    return (
      res.status(400).json({ response: "An error occurred." })
    )
  }
  
}