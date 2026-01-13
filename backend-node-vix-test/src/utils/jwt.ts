import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { ERROR_MESSAGE } from "../constants/erroMessages";
import { STATUS_CODE } from "../constants/statusCode";

const secret = process.env.JWT_SECRET!;

interface IPayload {
  idUser: string;
  role: string;
}

export const genToken = (payload: IPayload) => {
  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const verifyToken = (token: string): IPayload => {
  try {
    const decoded = jwt.verify(token, secret) as IPayload;
    return decoded;
  } catch (error) {
    console.error(error);
    throw new AppError(ERROR_MESSAGE.INVALID_TOKEN, STATUS_CODE.UNAUTHORIZED);
  }
};
