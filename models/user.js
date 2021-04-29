'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: 'dog_Id',
        sourceKey: 'id'
      });
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    nif: DataTypes.STRING,
    sitter: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};