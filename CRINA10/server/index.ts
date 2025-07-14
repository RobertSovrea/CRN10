import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, JS, etc.)
app.use(express.static('.'));

// Serve the slot machine HTML page for all routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
  console.error(err);
});

// ALWAYS serve the app on port 5000
const port = 5000;
const server = app.listen(port, "0.0.0.0", () => {
  log(`Crina's Anniversary Slot Machine serving on port ${port}`);
});
