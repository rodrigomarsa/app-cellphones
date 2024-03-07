const Joi = require('joi');

const addUserSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.min': '"email" must be a valid email',
    'string.required': '"email" is required',
  }),
  password: Joi.string().min(7).required().messages({
    'string.min': '"password" length must be at least 7 characters long',
    'string.required': '"password" is required',
  }),
});

const addProductSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    'string.required': '"name" is required',
  }),
  brand: Joi.string().required().messages({
    'string.required': '"brand" is required',
  }),
  model: Joi.string().required().messages({
    'string.required': '"model" is required',
  }),
  price: Joi.number().required().messages({
    'number.required': '"price" is required',
  }),
  color: Joi.string().required().messages({
    'string.required': '"color" is required',
  }),
});

module.exports = {
  addUserSchema,
  addProductSchema,
};
