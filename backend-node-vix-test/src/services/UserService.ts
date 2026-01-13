import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { TUserCreated } from "../types/validations/User/createUser";

const prisma = new PrismaClient();

export class UserService {
  async create(data: TUserCreated) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await prisma.user.create({
      data: { ...data, password: hashedPassword },
      select: { idUser: true, username: true, email: true, role: true },
    });
  }

  async findAll() {
    return await prisma.user.findMany({
      where: { deletedAt: null },
      select: {
        idUser: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
      },
    });
  }

  async findById(id: string) {
    return await prisma.user.findUnique({
      where: { idUser: id },
      select: { idUser: true, username: true, email: true, role: true },
    });
  }

  async update(id: string, data: Partial<TUserCreated>) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return await prisma.user.update({
      where: { idUser: id },
      data,
    });
  }

  async delete(id: string) {
    return await prisma.user.update({
      where: { idUser: id },
      data: { deletedAt: new Date(), isActive: false },
    });
  }
}
