var router=require('express').Router();

var authCheck=(req,res,next)=>{
    if(!req.user){
        res.redirect('/test/login')
    }else{
        next();
    }
}
// router.get('/test/profile',authCheck,(req,res)=>{
//     res.send('profile=',req.user.username)
// })
module.exports=authCheck;