'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Roo',
      email: 'rob@gmail.com',
      password: 'seederPassword',
      token: 'seederToken',
      firstName: 'Robert',
      lastName: 'de la Fuente',
      phone: '654302010',
      country: 'Spain',
      city: 'Valencia',
      address: 'C/ new Street 1',
      nif: '53058826-R',
      sitter: true,
      description: "I'am the developer.",  
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
