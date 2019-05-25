var express=require('express');
var router=express.Router();
// var router=require('express-promise-router')();
var multer=require('multer');
var path=require('path');
 var persianDate=require('persian-date');
 var postModel=require('../Models/Posts');
 var mongodb=require('mongodb');
 var mongoose=require('mongoose');
 var CommentModel=require('../Models/Comments');
 var passport =require('passport');
 var authCheck=require('../Models/authCheckMiddleware');
 var user=require('../Models/users');
 var Helper=require('../config/helper');
 var JWT=require('jsonwebtoken');
 var Keys = require('../config/Keys');
  

//  let connectionString= 'mongodb://127.0.0.1:27017/myBlog';

 mongoose.connect(Keys.connectionStringCloud,{useNewUrlParser:true},(err,success)=>{
     if(err){
         console.log('connect database error=',err);
     }
     else{
        //  console.log('connect database sucess=',success);
     }
 });

// <Date>
var date=new Date();
var date_miladi=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
// <Date />

 


// <upload-multer>
var storage=multer.diskStorage({
   destination:'public/uploads/images',
  filename:(req,file,cb)=>{
    cb(null,'post-'+ Date.now()+path.extname(file.originalname));    
  }
})
var upload=multer({
    // dest:'../public/uploads/images/',
    storage:storage,
    limits:{fileSize:100 *1024 * 1024} , //100MB,  
  
})

// <upload-multer />



// test routes
router.get('/test/date',(req,res)=>{
     res.send();
})



// <admin-route>
router.get('/admin/sendpost',(req,res)=>{
    res.render('admin/sendPost',{layout:'adminLayout'})
})

router.post('/admin/sendpost',upload.single('img_post'),(req,res)=>{

   
    // var filename2='post-'+Date.now()+path.extname(req.file.img_post);
    
    // console.log('filename',req.file.filename);
    var data=new postModel();

       
       data.title=(req.body.title),
       data.userID=(req.body.userID)
       data.body=(req.body.body),
        data.category=(req.body.category),
       data.postImage=req.file.filename,
        data.datePosted=date_miladi,
        data.author='saeid',
        data.numBazdid=0

        data.save((err,data)=>{
            if(err)
            {res.json(err)}
            else{
                // res.json(data)
                res.redirect(Keys.frontendUrl+'/admin/sendpost')
            }
        })
        
   
   
});

router.post('/admin/managepost',(req,res)=>{
    // postModel.find({},(err,data)=>{
    //     if(err){
    //         res.send(err);
    //     }else{
    //         res.json(data);
    //         // res.render('admin/managepost', {data});
    //     }

    // });
    // console.log('userID'+req.body.userID);
    postModel.find({userID:req.body.userID},(err,data)=>{
        console.log('userID',req.body.userID)
        if(err){
            res.send(err);
        }
        else{
            console.log(data.length)
            res.json(data);
        }
    })
    
})

 
//update post
router.get('/admin/update/:id',(req,res)=>{
    postModel.findOne({_id:req.params.id},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
            // res.render('admin/update',{data});
        }
    })

})


router.post('/admin/update',upload.single('img_post'),(req,res)=>{


    postModel.findOneAndUpdate({_id:req.body.id},{$set:{title:req.body.title,body:req.body.body,
        postImage:req.file.filename,category:req.body.category}},(err,data1)=>{
            if(err){
                res.json(err);
            }else{
               res.redirect(Keys.frontendUrl+'/admin/managepost')
               
            }
        }) 
})

//delete post 
router.get('/admin/delete/:id',(req,res)=>{
    
    postModel.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            res.send('Error\t'+err);
        }
        else{
            res.redirect(Keys.frontendUrl+'/admin/managepost');
        }
    })
})

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/redirect',passport.authenticate('google',{failureRedirect:'/signin',session:false}),(req,res)=>{

     
    // res.redirect('http://127.0.0.1:3000/auth/check')
//   console.log(req.user)    
  console.log('access token=',req.user.accessToken);
  console.log('user info=',req.user.newCurrentUser);

res.redirect(Keys.frontendUrl+'/admin/'+req.user.newCurrentUser+'/'+req.user.accessToken);
 
        
   
});


router.post('/auth/signup',(req,res)=>{
     user.findOne({"local.username":req.body.username}).then((data)=>{
         if(data){
             
             
              res.redirect(Keys.frontendUrl+'/signin');
            // redirect to login page


         }
         else{
             new user({
                 method:'local',
                 local:{
                     username:req.body.username,
                     password:req.body.password,
                     email:req.body.email,
                 }
             }).save().then((newUser)=>{
                //  console.log('data ='+newUser);
              
            var token= Helper.signToken(newUser.id); //token assign to user(part of unique)
            // res.send(token);
            var data={
                token:token,
                userID:newUser._id
            }
            console.log('data=',data);
            res.json(data);
            // res.send('new user creatde successfuly!\n'+'token='+token);
            // console.log('token=\t',token);
            
             });

           
         }
     })
     


});
//return info an user
router.get('/user/:userID',(req,res)=>{
    user.findOne({_id:req.params.userID}).then((data)=>{
        if(data){
            res.json(data);
            // console.log(data.local.username);
        }else{
            res.send('user not found');
        }
        
    })
    .catch((err)=>{
        res.send(err);
    })
    
})


//protected route
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res)=>{

    // console.log('this is protected route');
    // console.log(User);
    // res.status(200).send('welcome the profile='+req.user.username);
    res.json(req.user);
})

router.post('/auth/signIn',passport.authenticate('local',{session:false}),(req,res)=>{
   
    const token=Helper.signToken(req.user); // by this token we can access to protected route
    res.status(200).json({token});
    //  console.log('login successful');
});


/*

router.get('/test/google',passport.authenticate('google',{
    scope:['profile']
}))

router.get('/auth/google/redirect',passport.authenticate('google'),(req,res)=>{
    // res.send(req.user.username);
    res.redirect('/test/profile');
});
router.get('/test/profile',authCheck,(req,res)=>{
    // res.send('profile='+req.user.username);
    res.render('test/profile',{user:req.user});
});




*/

// router.post('/admin/signup',upload.none(),(req,res)=>{

//     // var user=new user();
//     // user.username=req.body.username;
//     // user.email=req.body.password;
    
    
// })



// <admin-route />


// <users-routes>


// Homepage result 
router.get('/homepage/:cat',(req,res)=>{
    postModel.find({category:req.params.cat},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    }).limit(4);

})

router.get('/homepage',(req,res)=>{


    postModel.find({},(err,data)=>{
        if(err)
        {
            res.json(err);

        }
        else{
            
            res.json(data);

        }
          
        
    });
})

//post per category
router.get('/cat/:cat',(req,res)=>{
     postModel.aggregate([ {$match:{category:req.params.cat}}],(err,data)=>{
         if(err){
             res.send(err);
         }
         else{
             res.json(data);
            //  res.render('postPerCat',{data});
         }
          
         
         
     })
})

// details of posts
router.get('/post/:id',(req,res)=>{
    postModel.findOne({_id:req.params.id},(err,data)=>{
        if(err)
        {
            res.send(err);
        }else{
            res.json(data);
        }
    })
})

//most visited(top(10))
router.get('/stats/mostvisited',(req,res)=>{
 postModel.find({}).sort({numBazdid:-1}).limit(10).exec(function(err,data){
     if(err){
         res.json(err);
     }
     else{
         res.json(data);
     }
 });
})

// Comments
router.post('/post/:postID/insertComment',upload.none(),(req,res)=>{
    var postid=req.params.postID;
    var comment=new CommentModel();
    comment.name=req.body.name;
    comment.email=req.body.email;
    comment.website=req.body.website;
    comment.comment=req.body.comment;
    comment.post=req.params.postID;
    comment.save((err,data)=>{
        if(err){
            console.log('error');
            res.json(err);
        }
        else{
            // console.log(req.params.postID);
            var redirectUrl=`${Keys.frontendUrl}/post/${postid}`;
            res.redirect(redirectUrl);
        }
             

    });   

})

//get all comments a post
router.get('/post/:id/comments',(req,res)=>{
    CommentModel.find({post:req.params.id},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            // console.log('success');
            res.json(data);
        }
    }).sort({date:-1});

});

//count comments a post
router.get('/post/:id/comments/count',(req,res)=>{
     
    CommentModel.countDocuments({post:req.params.id}).exec((err,data)=>{
        res.json(data);
    })

    // console.log(count)
   

})


// <users-routes />

// router.get('/auth/google',pas)

//<test-route>
router.get('/test/msg',(req,res)=>{
    // res.send('this is test message that send from express');
    var msg={
        name:'saeid',
        family:'imani'
    };
    res.json(msg);
})

// router.get('/auth/google2',passport.authenticate('google',{scope:['profile','email']}));



//<test-route />

router.get('/test/login',(req,res)=>{
    res.render('test/login');
});
router.get('/test/logout',(req,res)=>{
    // res.logout();
    req.logout();
    res.redirect('/index4')
});
router.get('/test',(req,res)=>{
    res.render('test/home');
})

// router.get('/test/profile',(req,res)=>{
//     res.send('profile ='+req.user.username);
// })

router.get('/index4',(req,res)=>{
    res.send('fake home page')
})


module.exports=router