import {mongoose,Schema } from "mongoose";
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    mobile :{
        type:String,
        required:true
    }
},{timestamps:true})
export const User=mongoose.model("User",userSchema)