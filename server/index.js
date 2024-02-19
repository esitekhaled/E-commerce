const express = require('express');
const morgan = require('morgan');
const sequelize = require('./database/index');
const User=require('./database/models/user-model')
const Product=require('./database/models/product')
const cartroute=require('./database/route/cart.route')
const productroute=require('./database/route/product.route')
const userroute=require('./database/route/user.route')
const wishroute=require('./database/route/wishlist.route')
const cors =require('cors')
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.use(cors())
app.use('/api/carts',cartroute)
app.use('/api/productss',productroute)
app.use('/api/wishes',wishroute)
app.use('/api/user',userroute)




const PORT = 3000;

sequelize.sync().then(() => {
    console.log('User table created (if not exists)');
  })
  .catch((error) => {
    console.error('Error creating User table:', error);
  })

app.listen(PORT, function () {
  console.log('on http://localhost:' + PORT);
});
