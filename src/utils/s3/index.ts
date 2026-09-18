import { S3Client } from "bun";

const accessKeyId = process.env.S3_ACCESS_KEY || "";
const secretAccessKey = process.env.S3_SECRET_KEY || "";
const bucket = process.env.S3_BUCKET || "default-bucket";
const region = process.env.S3_REGION || "us-east-1";
const endpoint = process.env.S3_ENDPOINT;

export const s3 = new S3Client({
  accessKeyId,
  secretAccessKey,
  bucket,
  region,
  endpoint,
});

// Example utility functions
export const uploadFile = async (key: string, file: Blob | Buffer | string) => {
  return await s3.write(key, file);
};

export const getFile = (key: string) => {
  return s3.file(key);
};

export const getPresignedUrl = (key: string, expiresIn: number = 3600) => {
  const file = s3.file(key);
  return file.presign({
    expiresIn,
  });
};
