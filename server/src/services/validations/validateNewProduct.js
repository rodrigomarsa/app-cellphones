const { addProductSchema } = require('./schema');

const validateNewProduct = async (product) => {
  const { name, brand, model, price, color } = product;
  const { error } = addProductSchema.validate({
    name,
    brand,
    model,
    price,
    color,
  });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};
