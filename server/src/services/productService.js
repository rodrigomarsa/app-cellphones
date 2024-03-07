const { Product } = require('../database/models');
const { validateNewProduct } = require('./validations/validateNewProduct');

const PRODUCT_NOT_EXIST = 'Product does not exist';

const createProduct = async ({ name, brand, model, price, color }) => {
  const error = await validateNewProduct(name, brand, model, price, color);
  if (error.type) return error;

  const newProduct = await Product.create({ name, brand, model, price, color });

  return { type: null, message: newProduct };
};

const getProducts = async () => {
  const products = await Product.findAll();

  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const product = await Product.findByPk(productId);
  if (!product) return { type: 'PRODUCT_NOT_EXIST', message: PRODUCT_NOT_EXIST };

  return { type: null, message: product };
};

const updateByProductId = async (productId, productToUpdate) => {
  const { name, brand, model, price, color } = productToUpdate;

  const error = await validateNewProduct(name, brand, model, price, color);
  if (error.type) return error;

  const product = await Product.findByPk(productId);
  if (!product) return { type: 'PRODUCT_NOT_EXIST', message: PRODUCT_NOT_EXIST };

  await Product.update(
    { name, brand, model, price, color },
    { where: { id: productId } },
  );

  return { type: null, message: 'Product updated successfully' };
};

const deleteByProductId = async (productId) => {
  const product = await Product.findByPk(productId);
  if (!product) return { type: 'PRODUCT_NOT_EXIST', message: PRODUCT_NOT_EXIST };

  await Product.destroy({ where: { id: productId } });

  return { type: null, message: 'Product deleted successfully' };
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateByProductId,
  deleteByProductId,
};
