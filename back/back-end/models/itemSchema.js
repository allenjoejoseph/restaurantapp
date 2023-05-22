const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    images:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})

const items = new mongoose.model("items1", itemSchema)

//export
module.exports = items