'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dogs',
      [
        {
          name: 'Rex',
          gender: 'male',
          breed: 'bulldog',
          size: 'big',
          age: '2',
          description: 'A beautiful bulldog called Rex.',
          user_Id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: 'Queen',
          gender: 'female',
          breed: 'Golden Retriever',
          size: 'big',
          age: '7',
          description: 'A beautiful golden retriever called Queen.',
          user_Id: 4,
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
