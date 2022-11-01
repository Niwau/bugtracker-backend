import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const updateBug = async (req : Request, res: Response) => {

  try {
    const bugs = await prisma.bug.update({
      where: {
        id: parseInt(req.params.id)
      }, 
      data: {
        description: req.body.description,
        status: req.body.status,
        title: req.body.title,
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