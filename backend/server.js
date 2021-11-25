// ENTRY POINT FOR SERVER/BACKEND
import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config()

const app = express();

// route
app.get('/', (req, res) => {
  res.send('API is running......');
});

app.get('/api/products', (req, res) => {
  res.json(products)
});

// get single product
app.get('/api/products/:id', (req, res) => {
  // get url product id
  const product = products.find(p => p._id === req.params.id);

  res.json(product)
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
