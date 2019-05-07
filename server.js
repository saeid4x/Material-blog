var express=require('express'),
    handlebar=require('express-handlebars'),
    multer=require('multer'),
    bodyParser=require('body-parser'),
    path=require('path');
    var routes=require('./routes/routes');
    var cors=require('cors');


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

app.get('/index2',(req,res)=>{
    res.send('success');
})
app.use(routes);
let port =8082;
app.listen(port,(err)=>{
    console.log('connected to port =\t',port);
})