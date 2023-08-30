// const passport = require("passport");
// const LinkedInOAuth = require("passport-linkedin-oauth2");
// const session = require('express-session')
// const express = require("express");

// const CONSTANTS={
//     PORT:8000,
//     Domain: 'http://127.0.0.1',
//     callbackUrl:'/auth/linkedin/callback',
//     authUrl:'/auth/linkedin',
//     successUrl:'/',
//     failureUrl:'/login',
//     linkedInScopes: ["r_emailaddress", "r_liteprofile"],
//     strategy:'linkedin'
// }
// //Create a new Express App
// const app = express();

// //Serialize/Deserialize User
// passport.serializeUser((user, done) => {
//     done(null, user);
//   });
  
//   passport.deserializeUser((user, done) => {
//     done(null, user);
//   });
  
//   //MIDDLEWARES
  
//   //Create a Session
//   app.use(session({ secret: process.env.SESSION_SECERT}));
  
//   //Initialize passport
//   app.use(passport.initialize());
  
//   //Create a passport session
//   app.use(passport.session());
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
  
//   //Create a LinkedIn Strategy
//   const LinkedInStrategy=LinkedInOAuth.Strategy
  
//   const LINKEDIN_CLIENTID = process.env.CLIENT_ID ;
//   const LINKEDIN_CLIENTSECRET = process.env.CLIENT_SECERT ;
  
//   const LINKEDIN_STRATEGY_OBJECT= {
//     clientID: LINKEDIN_CLIENTID,
//     clientSecret: LINKEDIN_CLIENTSECRET,
//     callbackURL: `${CONSTANTS.Domain}:${CONSTANTS.PORT}${CONSTANTS.callbackUrl}`,
//     scope: CONSTANTS.linkedInScopes,
//   }
  
//   passport.use(
//     new LinkedInStrategy(LINKEDIN_STRATEGY_OBJECT,
//       (
//         accessToken,     
//         refreshToken,
//         profile,
//         done
//       ) => {
//         process.nextTick(() => {
//           return done(null, profile);
//         });
//       }
//     )
//   );
  
//   app.get(CONSTANTS.authUrl,passport.authenticate(CONSTANTS.strategy, { state: '' }));
  
  
//   app.get(CONSTANTS.callbackUrl,passport.authenticate(CONSTANTS.strategy, {
//       successRedirect: CONSTANTS.successUrl,
//       failureRedirect: CONSTANTS.failureUrl,
//     })
//   );

// const OAuthController = require('../controllers/OAuthController');

// const router = express.Router();

// module.exports = router;