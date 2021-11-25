// ENTRY POINT FOR SERVER/BACKEND
const express = require('express');
const products = require('./data/products');


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




app.listen(5000, () => {
  console.log('Server is runnning on port 5000');
});
