const mongoose= require('mongoose');
const{Schema}=mongoose;

const contctSchema= new Schema({


    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    review:{
        type:String,
        required:true,
        unique:true
    },

    date:{
        type:Date,
        default:Date.now
    }
})

const Contact=mongoose.model('contact',contctSchema);
module.exports=Contact;