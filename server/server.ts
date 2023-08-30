import express, { Express, NextFunction, Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "./types/user"
import cors from "cors";
const passport = require("passport");
const LinkedInOAuth = require("passport-linkedin-oauth2");
const session = require('express-session')

require('dotenv').config();
const userRouter = require('./routes/userRouter.ts')
// const OAuthRouter = require('./routes/OAuthRouter.ts')

const app: Express = express();
const PORT = 3000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.use('/api/users', userRouter);
// app.use('/api/OAuth', OAuthRouter);

//Passport
const CONSTANTS={
  //local host domain
  Domain: 'http://127.0.0.1:3000',
  
  //redirect url
  callbackUrl:'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A98545999&keywords=trace%20(open%20source)&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=f4e1dfa6-c95d-4301-816e-ffe9743f640a&sid=aM1',
  
  //URL of the page that does authentication via LinkedIn 
  authUrl:'/auth/linkedin',

  // UPDATE SUCCESSURL TO HOME/WELCOME PAGE
  successUrl:'/',

  // CREATE FAILURE TO LOGIN PAGE? OR JUST REDIRECT BACK TO LOGIN
  failureUrl:'/login',

  //Scopes requested by our app from the LinkedIn app in order to access user-related information after authentication
  linkedInScopes: ["r_emailaddress", "r_liteprofile"],

  //The passport strategy being implemented (LinkedIn)
  strategy:'linkedin'
}

//Serialize/Deserialize User
passport.serializeUser((user : any, done : any) => {
  done(null, user);
});

passport.deserializeUser((user : any, done : any) => {
  done(null, user);
});

//MIDDLEWARES

//Create a Session
app.use(session({ secret: process.env.SESSION_SECERT}));

//Initialize passport
app.use(passport.initialize());

//Create a passport session
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create a LinkedIn Strategy
const LinkedInStrategy=LinkedInOAuth.Strategy

const LINKEDIN_CLIENTID = process.env.CLIENT_ID ;
const LINKEDIN_CLIENTSECRET = process.env.CLIENT_SECERT ;

const LINKEDIN_STRATEGY_OBJECT= {
  clientID: LINKEDIN_CLIENTID,
  clientSecret: LINKEDIN_CLIENTSECRET,
  callbackURL: `${CONSTANTS.Domain}:${PORT}${CONSTANTS.callbackUrl}`,
  scope: CONSTANTS.linkedInScopes,
}

passport.use(
  new LinkedInStrategy(LINKEDIN_STRATEGY_OBJECT,
    (
      accessToken : any,     
      refreshToken : any,
      profile : any,
      done : any
    ) => {
      process.nextTick(() => {
        return done(null, profile);
      });
    }
  )
);

app.get(CONSTANTS.authUrl,passport.authenticate(CONSTANTS.strategy, { state: '' }));


app.get(CONSTANTS.callbackUrl,passport.authenticate(CONSTANTS.strategy, {
    successRedirect: CONSTANTS.successUrl,
    failureRedirect: CONSTANTS.failureUrl,
  })
);

app.get("/", (req : any , res : Response) => {
  const user=req.user;
  if (user) {
    const firstName = user.name.givenName;
    const photo = user.photos[0].value;
    res.send(
      `<div style="text-align:center; width:100%; margin: 200px 0px;">
        <h1 style="font-family: sans-serif;"> Hey ${firstName} 👋</h1>
        <p style="font-family: sans-serif;"> You've successfully logged in with your Linkedn Account 👏 </p>
        <img src="${photo}"/>
      </div>
      `
    )
  } else {
    res.send(
    `<div style="text-align:center; width:100%; margin: 200px 0px;"> 
          <h1 style="font-family: sans-serif;">Welcome to LinkedIn OAuth App</h1>
          <img style="cursor:pointer;margin-top:20px"  onclick="window.location='/auth/linkedIn'" src="https://dryfta.com/wp-content/uploads/2017/04/Linkedin-customized-button.png"/>
    </div>
    `);
  }
});

//global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.sendStatus(500);
  });

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});