const passport = require("passport");
const express = require("express");
const router = express.Router();

const OAuthController = require('../controllers/OAuthController');

router.get('/auth/linkedin', passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_liteprofile'],
  }));

router.get('/auth/linkedin/callback',
passport.authenticate('linkedin', {
successRedirect: '/profile',
failureRedirect: '/login'
}));

module.exports = router;