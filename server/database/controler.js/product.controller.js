const db = require('../../database/index')

const User = db.models.user
const Product = db.models.product


const addProduct = async (req, res) => {
    try {
      const   user  = req.params.id;
      const productData = req.body;
  
      const use = await User.findByPk(user);
  
      
  
      const product = await Product.create({ ...productData,user_id:user});
  
      res.status(201).json(product);
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  

const findProduct = async (req, res) => {
  const category = req.params.category;
  const Products = await Product.findAll({ where: { category: category } });
  res.status(200).json(Products);
};

const updateProduct = async (req, res) => {
  const obj = req.body;
  const id = req.params.id;
  const Products = await Product.update(obj, { where: { product_id: id } });
  res.status(200).json(Products);
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const Products = await Product.destroy({ where: { product_id: id } });
  res.status(200).json(Products);
};

const findAllProduct = async (req, res) => {
  const Products = await Product.findAll({});
  res.status(200).json(Products);
};

const findProductByRating = async (req, res) => {
  const rate = req.params.rate || 50;
  const Products = await Product.findAll({ where: { rating: rate } });
  res.status(200).json(Products);
};

const findProductsBySellerId = async (req, res) => {
  const user_id = req.params.id;

  try {
    const products = await Product.findAll({
      where: { user_id: user_id },
      include: [{
        model: User,
      }],
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products by seller id:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addProduct,
  findProduct,
  updateProduct,
  deleteProduct,
  findAllProduct,
  findProductByRating,
  findProductsBySellerId,
};
