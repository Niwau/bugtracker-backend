import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const getBugs = async (req : Request, res: Response) => {
  const bugs = await prisma.bug.findMany()
  
  return res.status(200).json({ data: bugs })

}