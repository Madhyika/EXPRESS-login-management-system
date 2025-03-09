import express from "express";
import {
  register,
  login,
  updatePassword,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected content", user: req.user });
});

router.put("/update-password", verifyToken, updatePassword);

export default router;
