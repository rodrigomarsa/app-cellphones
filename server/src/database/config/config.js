require('dotenv').config();

const environment = process.env.NODE_ENV || 'production';

const suffix = {
  production: '-prod',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || '5432',
  database: `${process.env.POSTGRES_DATABASE || 'cellphones-api'}${
    suffix[environment] || suffix.test
  }`,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '1234',
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
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
