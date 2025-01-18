const express = require('express')
var cors = require('cors');
const connection = require('./connection'); // Corrected 'requir' to 'require'
const userRoutes = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')
const billRoute = require('./routes/bill')
const dashboardRoute = require('./routes/dashboard')
const app = express();
require('dotenv').config();

app.use(cors()); // Enable CORS
app.use(express.urlencoded({extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data
app.use('/user',userRoutes)
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/bill',billRoute);
app.use('/dashboard',dashboardRoute);``

//  app.listen(process.env.PORT, () => {
//     console.log(`run port ${process.env.PORT}`);
//   });


module.exports = app;