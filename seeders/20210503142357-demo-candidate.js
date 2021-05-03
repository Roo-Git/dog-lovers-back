'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates',
      [
        {
          post: "Nos vemos en 20 minutos",
          confirmedBySitter: true,
          acceptedByOwner: false,
          careRequest_Id: 1,
          sitter_Id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          
          post: "Llegaré un poco tarde",
          confirmedBySitter: true,
          acceptedByOwner: false,
          careRequest_Id: 2,
          sitter_Id: 3,
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
