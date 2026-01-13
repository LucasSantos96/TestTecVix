import { Router } from "express";
import { brandMasterRoutes } from "./brandMaster.routes";
import { vMRoutes } from "./vM.routes";
import { uploadsRoutes } from "./uploads.routes";
import { authRoutes } from "./authRoutes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use(uploadsRoutes);
routes.use(brandMasterRoutes);
routes.use(vMRoutes);
routes.use(userRoutes);
routes.use(authRoutes);
