import express, { Express, NextFunction, Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "./types/user"
import cors from "cors";
const passport = require("passport");
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const session = require('express-session')

require('dotenv').config();
const userRouter = require('./routes/userRouter.ts')
const OAuthRouter = require('./routes/OAuthRouter.ts')

const app: Express = express();
const PORT = 3000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.use('/api/users', userRouter);
app.use('/api/OAuth', OAuthRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user : any, cb : any) {
  cb(null, user);
});

passport.deserializeUser(function (obj : any, cb : any) {
  cb(null, obj);
});

passport.use(new LinkedInStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token : any, tokenSecret : any, profile : any, done : any) {
  return done(null, profile);
}
));

//global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.sendStatus(500);
  });

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});