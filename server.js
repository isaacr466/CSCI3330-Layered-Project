import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
