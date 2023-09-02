import express, { Express, NextFunction, Request, Response } from "express"
import cors from "cors"
require('dotenv').config()
const usersRouter = require('./routes/usersRouter.ts')
const applicationsRouter = require('./routes/applicationsRouter.ts')
const interviewRoundsRouter = require('./routes/interviewRoundsRouter.ts')
const commentsRouter = require('./routes/commentsRouter.ts')

const app: Express = express();
const PORT = 3000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/applications', applicationsRouter);
app.use('/api/interviewRounds', interviewRoundsRouter);
app.use('/api/comments', commentsRouter);

//global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.sendStatus(500);
  });

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});