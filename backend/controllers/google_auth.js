const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/google-user')

const GOOGLE_CALLBACK_URL = "http://localhost:5000/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };
      
        let user = await User.findOne({
            googleId: profile.id })
          //console.log(user)
            if(!user){
                user = await User.create(defaultUser)
            }
            console.log("profile",profile)
            //console.log("user",user)

            return cb(null, user);
    }
    ))


passport.serializeUser((user, cb) => {
  //console.log("Serializing user:", user);
  cb(null, user)
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findOne({googleId:id.id})
    console.log("DeSerialized user", user);
  
    if (user) cb(null, user);
  } catch (error) {
    cb(error)
  }
  
});


