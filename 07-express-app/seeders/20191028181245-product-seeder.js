"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Laptop",
          description: "Gaming Laptop",
          price: 1600,
          stock: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "iPhone 11",
          description: "Handphone masa kini",
          price: 2600,
          stock: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("products", null, {});
  }
};
