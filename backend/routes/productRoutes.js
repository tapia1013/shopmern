import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
// bring in the MODEL
import Product from '../models/productModel.js';



// @desc      Fetch all products
// @route     GET /api/products
// @access    Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // {} gives us everything
    const products = await Product.find({});

    res.json(products);
  })
);



// @desc      Fetch single products
// @route     GET /api/products/:id
// @access    Public

// get single product
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    // check if theres a product
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' })
    }

  })
);


export default router;