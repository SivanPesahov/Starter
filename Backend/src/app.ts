import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

export default app;
