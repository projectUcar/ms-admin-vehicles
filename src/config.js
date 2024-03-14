import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 4000;
export const SECRET_KEY = process.env.SECRET;
export const AUTH_MS_URL = process.env.AUTH_MS_URL;