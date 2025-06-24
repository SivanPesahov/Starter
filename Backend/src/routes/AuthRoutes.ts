import express from "express";
import {
  register,
  login,
  getLoggedInUser,
  getAllUsers,
} from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/loggedInUser", verifyToken, getLoggedInUser);
router.get("/getAllUsers", getAllUsers);

export default router;
