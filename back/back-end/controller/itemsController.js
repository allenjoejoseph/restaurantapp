// import items schema

const items = require('../models/itemSchema') 



//get all items
exports.getallitems = async(req,res)=>{
   try{
    allItems = await items.find()
    res.status(200).json(allItems)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//view all products
exports.viewitem = async(req,res)=>{
    const id = req.params.id
    try{
        const item = await items.findOne({id})  
        if(item){
            res.status(200).json(item)
        }
        else{
            res.status(404).json('Item not available')
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}