const express=require('express')
const Route = express.Router()
const cartController=require("../controler.js/cart.controller")
Route.post('/cart/:userId/:productId',cartController.addToCart)
Route.get('/cart/:id',cartController.getCartByUserId)

module.exports= Route