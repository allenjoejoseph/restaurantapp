const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const users = new mongoose.model("users", userSchema)

//export
module.exports = users