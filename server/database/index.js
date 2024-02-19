const { Sequelize } = require('sequelize');
const User = require("./models/user-model.js")
const Product = require("./models/product.js")



const sequelize = new Sequelize('ecommerce', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const user = sequelize.define("user", User)
const product = sequelize.define("product", Product)
product.belongsToMany(user, { through: 'wishlistTable' });
product.belongsToMany(user, { through: 'cart' });
console.log(sequelize.models);
sequelize.authenticate();
   
  module.exports =sequelize