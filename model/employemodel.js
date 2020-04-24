var Mongoose=require('mongoose');
const employSchema= new Mongoose.Schema({
    name : String,
    designation:String,
    address:String,
    age:Number,
    salary:Number,
    companyname:String

});
var employModel= Mongoose.model('employees',employSchema);
module.exports={employModel}