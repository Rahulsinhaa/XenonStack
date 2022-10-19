const express= require('express');
const Contact=require("../Model/ContactModel");
const router=express.Router();
const { body, validationResult } = require('express-validator');

router.post('/contact',[body('email').isEmail()],
async(req,res)=>{
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

try{
   admin=await Contact.create({
      name: req.body.name,
      email: req.body.email,
      review:req.body.review   
    })
   
    res.json({admin})
  }
    catch(error){
console.error(error.message);
res.status(500).send("some error occured")
    }
})

module.exports =router