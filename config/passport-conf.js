const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const Keys = require("./Keys");
var user = require("../Models/users");

const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");
// var LocalStorage=require("node-localstorage").LocalStorage;
// LocalStorage=new LocalStorage('./scratch');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  user.findById(id).then(user => {
    done(null, user);
  });
});

// google strategy
passport.use(
  new googleStrategy(
    {
      //options for google start
      callbackURL: "/auth/google/redirect",
      clientID: Keys.google.ClientID,
      clientSecret: Keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
        // console.log('access token=\t',accessToken);
        // LocalStorage.setItem('accessToken',accessToken);

      user
        .findOne({"google.googleID":profile.id})
        .then(currentUser => {
          if (currentUser) {
              // console.log('current user=',currentUser);
           
              
            done(null, {currentUser,accessToken});
          } else {
              
            new user({
                method:'google',
                local:{
                    username: profile.displayName,
                    email: profile._json.email,
                    password:null
                    
                },
                google:{
                    googleID: profile.id,
                    email: profile._json.email,
                },
                profile:{
                    avatar: profile._json.picture,
                    name: profile._json.given_name,
                    family: profile._json.family_name,

                }
            })
              .save()
              .then(newUser => {
               
                done(null, {newUser,accessToken});
              });
          }
        })
        .catch(err => {
   
        done(err,false,'error during create new user')
        });
   
    }
  )
);

//passport JWT
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: "saeidSecretKey" //[decode secret key]:must be equal to sceretKet that set into JWT.sign(, secretKey)[./Helper.js@signup]
    },
    (payload, done) => {
      //take data(user.id) from payload

      //find the user specified in token
      user
        .findOne(payload.sub)
        .then(User => {
          if (!User) {
            console.log("user not find");
            return done(null, false);
          } else {
            done(null, User);
          }
        })
        .catch(err => {
          console.log("error=\n" + err);
          done(null, false);
        });
    }
  )
);

// Passport-Local Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, done) => {
      //find user by username
      
      user.findOne({ 'local.username': username }).then(User => {
        if (!User) {
          //not pass anything to user

          console.log("not found this user");
          done(null, false);
        } else {
          console.log("find user=" + User.local.username);
          var isMatch = User.isValidPassword(password);
          console.log('isMatch='+isMatch);
          if (isMatch == false) {
            console.log("password not correct");
            return done(null, false);
          } else {
            console.log("password correct");
            done(null, User);
          }
        }
      });

      //check password is correct or not

      //if  password correct then return that user
    }
  )
);
