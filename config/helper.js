var JWT=require('jsonwebtoken');
module.exports={
    signToken:(user)=>{
        return JWT.sign({
            iss:'saeidImani',
            sub:user.id,
            iat:new Date().getTime(), //current time
            exp:new Date().setDate(new Date().getDate() + 1) //current time + 1 day ahead
            
        },'saeidSecretKey');

    }
     
}