const db = require('../../database/index')
const WishList = db.models.wishlistTable
const user = db.models.user
const Product = db.models.product



const addToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const User = await user.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!User || !product) {
      return res.status(404).send('User or product not found');
    }

    
    const existingWishlistItem = await WishList.findOne({
      where: { user_id: userId, product_id: productId },
    });

    if (existingWishlistItem) {
      return res.status(400).send('Product already in wishlist');
    }

    await WishList.create({
      user_id: User.user_id,
      product_id: product.product_id,
    });

    res.status(201).send('Product added to wishlist successfully');
  } catch (error) {
    console.error('Error adding product to wishlist:', error);
    res.status(500).send('Internal Server Error');
  }
};


const getWishlistByUserId = async (req, res) => {
    try {
      const  id  = req.params.id;
  
      const User = await user.findByPk(id);
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Find all products on the wishlist for the given user ID
      const wishlistProducts = await WishList.findAll({
        where: { user_id: User.user_id },
        include: [
          {
            model: Product,
          },
        ],
      });
  
      res.status(200).json(wishlistProducts);
    } catch (error) {
      console.error('Error fetching wishlist products:', error);
      res.status(500).send('Internal Server Error');
    }
  };

module.exports = { addToWishlist,getWishlistByUserId };
