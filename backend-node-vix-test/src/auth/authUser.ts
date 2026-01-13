import { Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { ERROR_MESSAGE } from "../constants/erroMessages";
import { STATUS_CODE } from "../constants/statusCode";
import { verifyToken } from "../utils/jwt";
import { CustomRequest } from "../types/custom";
import { User } from "@prisma/client";
import { prisma } from "../database/client";

export const authUser = async (
  req: CustomRequest<User>,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new AppError(ERROR_MESSAGE.INVALID_TOKEN, STATUS_CODE.UNAUTHORIZED);
  }
  const token = authorization.split(" ")[1];

  try {
    const decoded = verifyToken(token) as { idUser: string };

    const currentUser = await prisma.user.findFirst({
      where: {
        idUser: decoded.idUser,
        deletedAt: null,
      },
    });

    if (!currentUser) {
      throw new AppError(ERROR_MESSAGE.UNAUTHORIZED, STATUS_CODE.UNAUTHORIZED);
    }

    req.user = currentUser;

    return next();
  } catch (error) {
    console.error(error);
    throw new AppError(ERROR_MESSAGE.INVALID_CODE, STATUS_CODE.UNAUTHORIZED);
  }
};
