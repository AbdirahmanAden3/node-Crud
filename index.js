const express = require('express')
var cors = require('cors');
const connection = require('./connection'); // Corrected 'requir' to 'require'
const userRoutes = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')
const app = express();

app.use(cors()); // Enable CORS
app.use(express.urlencoded({extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data
app.use('/user',userRoutes)
app.use('/category',categoryRoute);
app.use('/product',productRoute);

module.exports = app; // Export the app object

