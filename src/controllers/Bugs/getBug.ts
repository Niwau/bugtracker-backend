import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const getBug = async (req : Request, res: Response) => {
  
  try {
    const bug = await prisma.bug.findFirst({
      where: {
        id: parseInt(req.params.id)
      }
    })
    return (
      res.status(200).json(bug)
    )
    
  } catch (error) {
    return (
      res.status(400).json({ response: "An error occurred." })
    )

  }

}