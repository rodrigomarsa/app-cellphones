const express = require('express');

const {
  createProduct,
  getProducts,
  getProductById,
  updateByProductId,
  deleteByProductId,
} = require('../controllers/productController');
const validateToken = require('../middlewares/validateToken');

const productRouter = express.Router();

productRouter.post('/', validateToken, createProduct);
productRouter.get('/', validateToken, getProducts);
productRouter.get('/:id', validateToken, getProductById);
productRouter.put('/:id', validateToken, updateByProductId);
productRouter.delete('/:id', validateToken, deleteByProductId);

module.exports = productRouter;
