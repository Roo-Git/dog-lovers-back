'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
      [
        {
          username: 'Roo',
          email: 'robert@gmail.com',
          password: 'seederPassword',
          token: 'seederToken',
          firstName: 'Robert',
          lastName: 'de la Fuente',
          phone: '654302010',
          country: 'Spain',
          city: 'Valencia',
          address: 'C/ new Street 1',
          nif: '53058826-R',
          sitter: false,
          description: "My name is Robert and I'm a seeder",  
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          username: 'AlexM',
          email: 'alex@gmail.com',
          password: 'seederPassword',
          token: 'seederToken',
          firstName: 'Alex',
          lastName: 'Monterde',
          phone: '630506070',
          country: 'Spain',
          city: 'Valencia',
          address: 'C/ new Street 2',
          nif: '52388361-V',
          sitter: false,
          description: "My name is Alex and I'm a seeder.",  
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          username: 'Silv',
          email: 'silvia@gmail.com',
          password: 'seederPassword',
          token: 'seederToken',
          firstName: 'Silvia',
          lastName: 'García',
          phone: '630536353',
          country: 'Spain',
          city: 'Valencia',
          address: 'C/ new Street 3',
          nif: '51357362-S',
          sitter: true,
          description: "My name is Silvia and I'm a seeder.",  
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          username: 'MarkTown',
          email: 'marcos@gmail.com',
          password: 'seederPassword',
          token: 'seederToken',
          firstName: 'Marcos',
          lastName: 'Martínez',
          phone: '630506070',
          country: 'Spain',
          city: 'Valencia',
          address: 'C/ new Street 4',
          nif: '54183367-A',
          sitter: false,
          description: "My name is Marcos and I'm a seeder.",  
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ],
    );
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
