import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:8000", credentials: true }));
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use(express.json());
app.use("/tasks", taskRoutes);

app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
