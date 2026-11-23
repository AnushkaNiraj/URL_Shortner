const { Timestamp } = require('bson')
const mongoose=require('mongoose')
const { type } = require('node:os')

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        unique:true,
        required:true,
    },
    originalURL:{
        type:String,
        required:true,
    },
    visited:[{timestamp:{type:Number}}],
},
    {timestamps:true}
)

const URL=mongoose.model('url',urlSchema)

module.exports=URL;