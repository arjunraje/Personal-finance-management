import express, { Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express");
});


app.use(errorHandler);

export default app;
