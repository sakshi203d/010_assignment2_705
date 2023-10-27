const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    Password:{
        type:String,
    },
    DOB:{
        type:Date,
    },
    email:{
        type:String,
        unique:true
    },
    mobileNo:{
        type:Number,
        unique:true,
    },
    image:[{
        type:String
    }]
})

const userModel = new mongoose.model('User',userSchema);
module.exports = userModel;