import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
const router = require('./routes/index.ts')

const app: Express = express();
const PORT = 4328;

app.use(cors({ credentials: true }));
app.use(express.json());

app.use('/api', router);

//global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.sendStatus(500);
  });

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});