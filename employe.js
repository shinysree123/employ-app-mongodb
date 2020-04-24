var Express=require('express');
var Parser=require('body-parser');
var Mongoose=require('mongoose');
var app=Express();
var Employrouter=require('./router/router');
app.use('/',Employrouter);
Mongoose.connect("mongodb+srv://shinyjoseph:shiny@cluster0-wburb.mongodb.net/test?retryWrites=true&w=majority");
app.use(Parser.urlencoded({extended:false}));
app.listen(process.env.PORT||4000,()=>{
    console.log("server started");
});