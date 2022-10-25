import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const updateBug = async (req : Request, res: Response) => {

  const bugs = await prisma.bug.update({
    where: {
      id: parseInt(req.params.id)
    }, 
    data: {
      author: req.body.author,
      description: req.body.description,
      status: req.body.status,
      title: req.body.title,
    }
  })
  
  return res.status(200).json({ data: bugs })

}