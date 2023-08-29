import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
require('dotenv').config();
const userRouter = require('./routes/userRouter.ts')
const profileApiMockJsonData = require('./database/mockData/profileApiMockJsonData');
// console.log(profileApiMockJsonData);
const messageApiMockJsonData = require('./database/mockData/messageApiMockJsonData');
console.log(messageApiMockJsonData);
const connectionsApiMockJsonData = require('./database/mockData/connectionsApiMockJsonData');

// console.log(connectionsApiMockJsonData.elements[0]);

const app: Express = express();
const PORT = 3000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.use('/api/users', userRouter);

//global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.sendStatus(500);
  });

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});