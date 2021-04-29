'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Dogs',
      'user_Id',
      {
        type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
    )];
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
