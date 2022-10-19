const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/Rahul";

 const connetToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
 }

 module.exports= connetToMongo;