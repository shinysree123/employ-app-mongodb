var Express =require('express');
var {employModel}=require('../model/employemodel');
const router=Express.Router();
router.get('/employ',(req,res)=>{
    res.send("welcome to employ portal");
});
router.post('/insert',async(req,res)=>{
    var getname=req.body.name;
    var getdesig=req.body.designation;
    var getaddr=req.body.address;
    var getage=req.body.age;
    var getsal=req.body.salary;
    var getcomp=req.body.companyname;
    try {
        var employdata= new employModel(req.body);
        var result= await employdata.save();
        res.json(result);
    } catch (error) {
        console.log(error);
    res.status(500).send(error);     }            
});
router.post('/viewall',async(req,res)=>{
    try {
        var result =await employModel.find();
        res.send(result);
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});
module.exports=router;
