import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export class AuthService {
  async executeLogin(email: string, pass: string) {
    const user = await prisma.user.findFirst({
      where: { email, deletedAt: null },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(pass, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const secret = process.env.JWT_SECRET || "default_secret";
    const token = jwt.sign({ idUser: user.idUser, role: user.role }, secret, {
      expiresIn: "1d",
    });

    return {
      user: {
        idUser: user.idUser,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }
}
