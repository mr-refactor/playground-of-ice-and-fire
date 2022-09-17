import express, { Router, Request, Response, NextFunction } from "express";

export const books: Router = express.Router();

books.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now());
  next();
});

books.get("/", (req: Request, res: Response) => {
  res.send("Books home page");
});
