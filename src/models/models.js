const mongoose = require('mongoose');
const validator = require('validator');

const SchemaApi = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true,
        min:10,
        unique:true
    },
    RollNo:{
        type:Number,
        required:true,
        unique:true
    }
})

const API = mongoose.model('API',SchemaApi);
module.exports = API;