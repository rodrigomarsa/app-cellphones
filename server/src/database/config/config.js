require('dotenv').config();

const environment = process.env.NODE_ENV || 'production';

const suffix = {
  production: '-prod',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
  database: `${process.env.DB_NAME || 'cellphones-api'}${
    suffix[environment] || suffix.test
  }`,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '1234',
  dialect: 'postgres',
  logging: false,
};

module.exports = {
  production: {
    ...options,
  },
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
