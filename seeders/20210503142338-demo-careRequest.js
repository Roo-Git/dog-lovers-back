'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CareRequests',
      [
        {
          owner_Id: 1,
          dog_Id: 1,
          startDate: "04/04/2021",
          finishDate: "04/04/2021",
          post: "Necesito que saquen a pasear a Rex esta tarde",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          owner_Id: 4,
          dog_Id: 2,
          startDate: "07/04/2021",
          finishDate: "07/04/2021",
          post: "Necesito que saquen a pasear a Queen esta noche",
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
