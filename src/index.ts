import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morganMiddleware from './middleware/morgan'
import verifyJWT from './middleware/jwtAuth';

import { createJWTToken } from './service/auth';

import log from "./utils/logger";
import { create } from 'domain';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(morganMiddleware)

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  log.info("hello")
  res.send('Hello world');
});

app.get('/tes', verifyJWT, (req: Request, res: Response) => {
  // log.info("hello");
  res.send('Hello tes');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});