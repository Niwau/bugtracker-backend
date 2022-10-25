import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface loginInformations {
  email: string;
  password: string;
}

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const user: loginInformations = { ...req.body };

  const userExists = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (!userExists) {
    return res
      .status(401)
      .json({ response: `You don't have an registered account` });
  }

  const passwordMatches = await bcrypt.compare(
    user.password,
    userExists.password
  );

  if (!passwordMatches) {
    return res.status(401).json({ response: "Email or password incorrect" });
  }

  const token = jwt.sign(
    {
      id: userExists!.id,
      name: userExists!.name,
      role: userExists!.role,
    },
    process.env.SECRET!
  );

  return res.status(200).json({ token: token });
};
