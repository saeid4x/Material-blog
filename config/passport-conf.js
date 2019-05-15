const passport =require('passport');
const googleStrategy=require('passport-google-oauth20');
const Keys=require('./Keys');

passport.use(new googleStrategy({
    //options for google start
    callbackURL:'/auth/google/redirect' ,
    clientID:Keys.google.ClientID,
    clientSecret:Keys.google.clientSecret
}, function(accessToken, refreshToken, profile, cb) {
    console.log(profile.name);

     
}
    )
)



 