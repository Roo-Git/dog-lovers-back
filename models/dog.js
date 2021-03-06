'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Asociación con el usuario
      Dog.belongsTo(models.User, {
        foreignKey: "user_Id",
        as: "parent"
      });
      Dog.hasMany(models.CareRequest, {
        foreignKey: 'dog_Id',
      }); 
      Dog.hasMany(models.Confirmation, {
        foreignKey: 'dog_Id'
      });
          //user_Id.hasMany(models.Confirmation, {                          **** user_Id is not defined
            //foreignKey: 'user_Id'
          //})
    }
  };
  Dog.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    breed: DataTypes.STRING,
    size: DataTypes.STRING,
    age: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};