'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Dog, {
        foreignKey: 'user_Id',
        
      });

      User.hasMany(models.CareRequest, {
        foreignKey: 'owner_Id', 
      });

      User.hasMany(models.Candidate, {
        foreignKey: 'sitter_Id',
      }) 

      // User.hasMany - > Confirmations?
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