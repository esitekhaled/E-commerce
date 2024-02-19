const express=require('express')
const Route = express.Router()
const wishController=require("../controler.js/wishlist.controller")
Route.post('/wishlist/:userId/:productId',wishController.addToWishlist)
Route.get('/wishlist/:id', wishController.getWishlistByUserId);

module.exports= Route