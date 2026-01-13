import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { API_VERSION } from "../constants/basePathRoutes";

const BASE_PATH = API_VERSION.V1 + "/auth";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post(`${BASE_PATH}/login`, async (req, res) => {
  await authController.login(req, res);
});

export { authRoutes };
