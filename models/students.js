const express = require("express");
const  mongoose  = require("mongoose");

const studentShema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    username:{
        type:String,
        required:true,
        unique:true,
    },

    height:{
        type:Number,
        required:true,
        unique:false,
    },
});

const Studnet = new mongoose.model("student",studentShema);

module.exports = Studnet;
