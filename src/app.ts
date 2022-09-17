import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv'
dotenv.config() 
import { logger } from './utils/logger';
import { mountControllers } from './controllers/mount';

export const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

mountControllers(app);