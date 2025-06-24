import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/AuthRoutes";
dotenv.config();

const app = express();

async function main() {
  await connectDB();

  app.use(express.static("public"));
  app.use(express.json());
  app.use(cors());

  app.use("/api/Auth", authRoutes);

  app.get(/^(?!\/api).*/, (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main().catch((err) => console.error(err));
