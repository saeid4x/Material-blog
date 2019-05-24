var express=require('express'),
    handlebar=require('express-handlebars'),
    multer=require('multer'),
    bodyParser=require('body-parser'),
    path=require('path');
    var routes=require('./routes/routes');
    var cors=require('cors');

var passport=require('passport');
var passport_conf=require('./config/passport-conf');
var cookieSession=require('cookie-session');
var Keys=require('./config/Keys');
// var AuthCheck=require('./Models/authCheckMiddleware');
var app=express();
// var router=Router();
// var router=express.Router();



app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

//@@
app.use(express.static(path.join(__dirname,"client","build")));

// <upload-multer>
// const storage=multer.diskStorage({
//   destination:'./public/uploads/images/',
//   filename:(req,file,cb)=>{
//     cb(null,file.fieldname+'-'+ Date.now()+path.extname(file.originalname));    
//   }
// })



// <upload-multer />

app.engine('handlebars', handlebar({defaultLayout:'main', extname: '.handlebars'})); 
app.set('view engine', 'handlebars');
app.use(cookieSession({
  maxAge:24 *60 *60 *1000,
  keys:[Keys.session.cookie]
}))
app.use(passport.initialize());
app.use(passport.session());


app.get('/index2',(req,res)=>{
    res.send('success');
})
app.use(routes);
let port =8082;
app.listen(port,(err)=>{
    console.log('connected to port =\t',port);
})