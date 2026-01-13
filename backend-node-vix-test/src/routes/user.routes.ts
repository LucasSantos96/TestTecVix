import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { API_VERSION, ROOT_PATH } from "../constants/basePathRoutes";

const BASE_PATH = API_VERSION.V1 + ROOT_PATH.USER;

const userRoutes = Router();

export const makeUserController = () => {
  return new UserController();
};

const userController = makeUserController();

// ========= GETs =========
userRoutes.get(BASE_PATH, async (req, res) => {
  await userController.getOne(req, res);
});

userRoutes.get(`${BASE_PATH}/:idUser`, async (req, res) => {
  await userController.getOne(req, res);
});

// ========= POSTs =========
userRoutes.post(BASE_PATH, async (req, res) => {
  await userController.create(req, res);
});

// ======== PUTs =========
userRoutes.put(`${BASE_PATH}/:idUser`, async (req, res) => {
  await userController.update(req, res);
});

// ======== DELETEs ========
userRoutes.delete(`${BASE_PATH}/:idUser`, async (req, res) => {
  await userController.delete(req, res);
});

export { userRoutes };
