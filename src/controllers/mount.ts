import { Application } from "express";
import { books } from "./books";

export function mountControllers(app: Application){
    app.use("/books", books);
}