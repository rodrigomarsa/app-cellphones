const { ProductService } = require('../services');
const { mapError } = require('../utils/mapError');

const createProduct = async (req, res) => {
  const { name, brand, model, price, color } = req.body;
  const { type, message } = await ProductService.createProduct({
    name,
    brand,
    model,
    price,
    color,
  });

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
};

const getProducts = async (_req, res) => {
  const { type, message } = await ProductService.getProducts();

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await ProductService.getProductById(id);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
};

const updateByProductId = async (req, res) => {
  const { id } = req.params;
  const { name, brand, model, price, color } = req.body;

  const { type, message } = await ProductService.updateByProductId(id, {
    name,
    brand,
    model,
    price,
    color,
  });

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
};

const deleteByProductId = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await ProductService.deleteByProductId(id);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(204).end();
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateByProductId,
  deleteByProductId,
};
