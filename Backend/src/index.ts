import { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/AuthRoutes";
import app from "./app";
dotenv.config();

async function main() {
  await connectDB();

  app.use("/api/Auth", authRoutes);

  // -- for deployment
  // app.get("*", (req: Request, res: Response) => {
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  // });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main().catch((err) => console.error(err));
