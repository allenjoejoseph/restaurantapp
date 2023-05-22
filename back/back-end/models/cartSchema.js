const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
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
    quantity:{
        type:Number,
        required:true,
    },
    grandTotal:{
        type:Number,
        required:true,
    }

})

const cart = new mongoose.model("cartitems", cartSchema)

//export
module.exports = cart