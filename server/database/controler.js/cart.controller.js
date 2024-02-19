const db = require('../../database/index')
const User = db.models.user
const Product = db.models.product
const Cart = db.models.cart


const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).send('User or product not found');
    }

    await Cart.create({
      user_id: user.user_id,
      product_id: product.product_id,
    });

    res.status(201).send('Product added to cart successfully');
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getCartByUserId = async (req, res) => {
  try {
    const  userId  = req.params.id;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    const cartProducts = await Cart.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Product,
        },
      ],
    });

    res.status(200).json(cartProducts);
  } catch (error) {
    console.error('Error fetching cart products:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { addToCart, getCartByUserId };
