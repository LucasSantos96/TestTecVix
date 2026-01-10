import { Response } from "express";
import { CustomRequest } from "../types/custom";
import { STATUS_CODE } from "../constants/statusCode";
import { IBucketService } from "../types/Interfaces/IBucketService";
import path from "path";

export class BucketController {
  constructor(private bucketService: IBucketService) {}

  private normalizeObjectName(objectName: string | string[]): string {
    return Array.isArray(objectName) ? objectName[0] : objectName;
  }

  async getFileInBucketByObjectName(
    req: CustomRequest<unknown>,
    res: Response,
  ) {
    const objectName = this.normalizeObjectName(req.params.objectName);
    const filePath = path.join(__dirname, "..", "..", "uploads", objectName);
    return res.sendFile(filePath);
  }

  async getFileByObjectName(req: CustomRequest<unknown>, res: Response) {
    const objectName = this.normalizeObjectName(req.params.objectName);
    const response = await this.bucketService.renewPresignedUrl(objectName);
    return res.status(STATUS_CODE.OK).json({ url: response });
  }

  async uploadFile(req: CustomRequest<unknown>, res: Response) {
    const file = req.file;
    if (!file)
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .send({ message: "No file uploaded" });
    const response = await this.bucketService.uploadFile(
      process.env.MINIO_BUCKET as string,
      file,
    );

    return res.status(STATUS_CODE.OK).json(response);
  }
}
