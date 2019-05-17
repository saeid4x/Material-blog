const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const Keys = require("./Keys");
var user = require("../Models/users");

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    user.findById(id).then((user)=>{
        done(null,user);
    })
  
});



passport.use(
  new googleStrategy(
    {
      //options for google start
      callbackURL: "/auth/google/redirect",
      clientID: Keys.google.ClientID,
      clientSecret: Keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
        user.findOne({googleID:profile.id}).then((currentUser)=>{
            if(currentUser){
                
                done(null,currentUser);

            }else{
                new user({
                    username:profile.displayName,
                    googleID:profile.id,
                    email:profile._json.email,
                    picture:profile._json.picture,
                    name:profile._json.given_name,
                    family:profile._json.family_name,
                    password:'demo'

                }).save().then((newUser)=>{
                    // console.log('new user saved',userSaved);
                    done(null,newUser);

                });
            }
        }).catch((err)=>{
            console.log('error new user=',err);
        })
        // console.log(profile._json.email);
    }
  )
);
