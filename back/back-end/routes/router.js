const express = require('express')

const itemsController = require('../controller/itemsController')

const cartController = require('../controller/cartController')

const userController = require('../controller/userController')

const router = new express.Router()

//get all items
router.get('/items/all-items',itemsController.getallitems)

//view items
router.get('/items/view-items/:id',itemsController.viewitem)

//add to cart
router.post('/cart/add-item',cartController.addtocart)

//get cart
router.get('/cart/all-items',cartController.getcart)

router.delete('/cart/remove-item/:id', cartController.removeitem)

//add user  
router.post('/register', userController.register)

//login
router.post('/login', userController.login)

module.exports = router