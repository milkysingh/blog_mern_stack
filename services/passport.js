const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");
const mongoose = require("mongoose");
const MongoServices = require("../services/mongoservices");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await MongoServices.findUser({ _id: id });
  if (user) {
    done(null, user);
  }
  // User.findById(id).then(user => {
  //   console.log("Userrrrrrrrrrrrrrrrrrrrrrr", user);
  //   done(null, user);
  // });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await MongoServices.findUser({
        googleID: profile.id
      });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await MongoServices.addNewUser({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleID: profile.id
      });
      return done(null, user);
    }
  )
);
