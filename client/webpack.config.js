const path=require('path');
var webpack=require('webpack');
const config={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
       
    },
   module:{
       rules:[
           {
               use:'babel-loader',
               test:/\.js$/,   //babel only apply to .js files
           }
       ]
   }
};

module.exports=config;
