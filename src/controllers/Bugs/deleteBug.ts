import { PrismaClient } from '@prisma/client';
import { Request, Response} from "express";

const prisma = new PrismaClient()

export const deleteBug = async (req : Request, res: Response) => {

  const bug = await prisma.bug.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })

  return res.status(200).json({ deleted: bug })

}