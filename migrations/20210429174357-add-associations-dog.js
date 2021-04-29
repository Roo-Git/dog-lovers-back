'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Dogs', // Nombre del modelo al que apuntamos.
      'user_Id', // Nombre del ID que añadiremos en la columna.
      {
        type: Sequelize.INTEGER,
        require: true,
          references: {
            model: 'Users', // Nombre del modelo fuente.
            key: 'id' //  ID que hacemos referencia. En este caso sería el ID de User.
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
