const cartitems = require('../models/cartSchema')


//add to cart
exports.addtocart = async (req,res)=>{
    const{id, name, images, price, quantity} = req.body

    try{

        const item = await cartitems.findOne({id})

        if(item){
            item.quantity+=1

            item.grandTotal= item.price * item.quantity

            item.save()

            res.status(200).json(`Item added to cart again`)
        }
        else{
            const newItem = new cartitems({
                id, name, images, price, quantity, grandTotal:price
            })

            await newItem.save()
            res.status(200).json(`Item added to cart`)
        }
    }
    catch(err){
        res.status(401).json(err)
    }




}

exports.getcart = async (req,res)=>{
    try{
        const allItems = await  cartitems.find()
        res.status(200).json(allItems)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.removeitem = async (req, res)=>{
    const {id} = req.params

    try{
        const remove = await cartitems.deleteOne({id})
        if(remove){
            const allItems = await cartitems.find()
            res.status(200).json(allItems)
        }
        else{
            res.status(404).json("Item not in cart")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}