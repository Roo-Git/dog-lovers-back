'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
      username: {
      type: DataTypes.STRING,
        validate: {
          len: [5, 10],
        },
      },

      email: {
      type: DataTypes.STRING,
        validate: {
          len: [10, 20],
        },
      },

      // Comentario de Robert de la Fuente 26/04/2021

      // No he conseguido poner la contraseña que no sea nula.
      
      // Anteriormente Lo he intentado de las siguientes formas:
      // con allowNull: false.
      // con require: true.
      // y en la validacion, poniendo notNull: true, o isNull: true.

      // He consultado la siguiente documentación:
      // https://sequelize.org/master/manual/validations-and-constraints.html

      // He intentado darle un Len, pero no hay manera.
      
      
      password: {       
        type: DataTypes.STRING,
        validate: {
          len: [5, 1000000],
        },
      },

    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    dni: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};