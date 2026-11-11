# CSCI 3330 Layered Project

A small Express application demonstrating a layered architecture and one working GET route.

## Project structure

- `source.js` — data source layer; stores the sample tasks.
- `services/taskService.js` — service layer; retrieves tasks from the data source.
- `controllers/taskController.js` — controller layer; handles the HTTP request and response.
- `routes/taskRoutes.js` — routes layer; defines `GET /api/tasks`.
- `middleware/errorHandler.js` — middleware layer; handles application errors consistently.
- `app.js` — configures Express, serves the `public` folder, and mounts the API routes.
- `server.js` — starts the server.
- `public/` — static frontend files (HTML, CSS, and browser JavaScript).

## Install and run

Open a terminal in this project folder and run:

```bash
npm install
npm start
```

Then open `http://localhost:3000` to view the public page, or visit `http://localhost:3000/api/tasks` to test the GET route directly.

The API returns a JSON object with `success: true` and the three sample tasks in `data`.
