const db = require('../../database/index')
const Product = require('../models/product');
const Image = db.models.image

const addToimage = async (req, res) => {
  try {
    const i=req.body
    const productId = req.params.productId;

    // Check if the user and product exist
    const product = await Product.findByPk(productId);

    if ( !product) {
      return res.status(404).send('product not found');
    }

    // Add 
    await Image.create({
      productId: productId,
      url:i
    });

    res.status(201).send('Product added  successfully');
  } catch (error) {
    console.error( error);
    res.status(500).send('Internal Server Error');
  }
};

const getimageByproductrId = async (req, res) => {
  try {
    const  productId  = req.params.productId;

    // Check if the user exists
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send('pro not found');
    }

    // Find all products in the cart for the given user ID
    const iamgeProducts = await Image.findAll({
      where: {productId : productId },
      include: [
        {
          model: Product,
        },
      ],
    });

    res.status(200).json(iamgeProducts);
  } catch (error) {
    console.error('Error fetching cart products:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { addToimage, getimageByproductrId };
