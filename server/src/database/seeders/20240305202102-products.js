'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Apple iPhone 13',
          brand: 'Apple',
          model: 'iPhone 13',
          price: 799.99,
          color: 'Preto',
          user_id: 1,
        },
        {
          name: 'Samsung Galaxy S21',
          brand: 'Samsung',
          model: 'Galaxy S21',
          price: 699.99,
          color: 'Branco',
          user_id: 1,
        },
        {
          name: 'Motorola Moto G100',
          brand: 'Motorola',
          model: 'Moto G100',
          price: 499.99,
          color: 'Azul',
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
