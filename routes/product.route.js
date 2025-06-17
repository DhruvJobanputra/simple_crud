const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', getProducts);
router.get('/:id', getProduct);

// Create Product API
router.post('/', createProduct);

// Update Product API
router.put('/:id', updateProduct);

// Delete Product API
router.delete('/:id', deleteProduct);

module.exports = router;