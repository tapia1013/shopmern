// ENTRY POINT FOR SERVER/BACKEND
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
// mongodb / mongoose
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';



dotenv.config();

// call connectDB
connectDB();

const app = express();

// route
app.get('/', (req, res) => {
  res.send('API is running......');
});

app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});



// @ video 9 custom error handling @ 00:26