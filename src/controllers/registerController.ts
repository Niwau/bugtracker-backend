import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { registerValidation } from "../validation/authValidation";
import bcrypt from "bcrypt";

interface registerInformations {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const user: registerInformations = { ...req.body };

  try {
    await registerValidation.validate(user);
  } catch (error) {
    return res.status(400).json({ response: error });
  }

  const userExists = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (userExists) {
    return res.status(401).json({ response: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);

  await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: hashedPassword,
      
    },
  });

  return res.status(201).json({ response: 'Your account was created' });
};
