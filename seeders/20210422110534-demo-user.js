'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "Admin",
        email:  "admin@gmail.com",
        password: "1234",
        firstName: "John",
        lastName: "Doe",
        phone: "+34 58741258963",
        address: "c/ new street",
        dni: "53058811R",
        token: "ALXDGLG",
        description: "I'am the admin",
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
