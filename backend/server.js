// ENTRY POINT FOR SERVER/BACKEND
import express from 'express';
import colors from 'colors';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
// mongodb / mongoose
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


dotenv.config();

// call connectDB
connectDB();

const app = express();

// parse the body for login and register json data
app.use(express.json());

// route
app.get('/', (req, res) => {
  res.send('API is running......');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});
