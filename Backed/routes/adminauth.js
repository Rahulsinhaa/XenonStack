const express= require('express');
const Admin=require("../Model/Admin");
const router=express.Router();

var bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

router.post('/admin',[  body('email').isEmail(),body('password').isLength({ min: 5 })],
async(req,res)=>{
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

try{
    let user=await Admin.findOne({email:req.body.email});

    if(user){
      return res.status(400).json({error:"sorry a user alrady exists"});
    }


  const salt=await bcrypt.genSalt(10);
  const secPass =await bcrypt.hash(req.body.password,salt);

   admin=await Admin.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
     
    })
   
    res.json({admin})
  }
    catch(error){
console.error(error.message);
res.status(500).send("some error occured")
    }
})


///-------------------------authanticate admin routes

router.post('/loginadmin',[  
    body('email').isEmail(),
    body('password',"password cannot be blank ").exists(),
  ],async(req,res)=>{
     const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {email,password}=req.body;
      try {
  
        let admin=await Admin.findOne({email});
        if(!admin){
         return  res.status(400).json({error:"login with the right credentail"});
        }
  const passwordcompare=await bcrypt.compare(password,admin.password);
  if(!passwordcompare){
    return  res.status(400).json({error:"login with the right credentail"});
  }

      res.json({admin});
      } catch (error) {
        console.error(error.message);
  res.status(500).send("some error occured")
      }
    })


    
// fethch user ----- in admin page ---
router.post('/fetchUser',async(req,res)=>{
     
         const{admin1}=req.body;
           console.log(admin1);
      try {
  
        let user=await User.find({admin:admin1});
        console.log({user});
        if(!user){
         return  res.status(400).json({error:"login with the right credentail"});
        }
      res.json({user});
      } catch (error) {
        console.error(error.message);
  res.status(500).send("some error occured")
      }
    })







module.exports =router
