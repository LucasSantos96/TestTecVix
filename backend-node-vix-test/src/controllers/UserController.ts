import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  private userService = new UserService();

  private normalizeObjectName(user: string | string[]): string {
    return Array.isArray(user) ? user[0] : user;
  }

  create = async (req: Request, res: Response) => {
    const user = await this.userService.create(req.body);
    return res.status(201).json(user);
  };

  getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.findAll();
    return res.json(users);
  };

  getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const safeId = this.normalizeObjectName(id);

    const user = await this.userService.findById(safeId);
    return res.json(user);
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = this.normalizeObjectName(req.params.id);
      const updatedUser = await this.userService.update(id, req.body);
      return res.json(updatedUser);
    } catch (error: unknown) {
      console.error(error);
      return res.status(400).json({ message: "Error updating user" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = this.normalizeObjectName(req.params.id);
      await this.userService.delete(id);
      return res.status(204).send(); // 204 No Content é o padrão para deletes bem-sucedidos
    } catch (error: unknown) {
      console.error(error);
      return res.status(400).json({ message: "Error deleting user" });
    }
  };
}
