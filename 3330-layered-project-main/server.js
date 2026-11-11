// Server entry point: starts the Express application.
import app from "./app.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
