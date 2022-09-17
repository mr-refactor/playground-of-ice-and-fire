import {Request, Response, NextFunction} from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} request received on ${req.originalUrl}`);
    next();
}