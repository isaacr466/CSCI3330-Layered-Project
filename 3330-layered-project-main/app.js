// Application entry: configures middleware and mounts the route modules.
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/tasks", taskRoutes);

// Return a JSON 404 for unknown API endpoints.
app.use("/api", (req, res) => {
  res.status(404).json({ success: false, message: "API route not found." });
});

// Centralized error-handling middleware (must be registered last).
app.use(errorHandler);

export default app;
