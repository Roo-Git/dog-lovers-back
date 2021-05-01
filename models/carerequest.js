'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CareRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CareRequest.belongsTo(models.User, {
        foreignKey: "owners_Id",
        as: "owners"
      });

      CareRequest.belongsTo(models.Dog,{
        foreignKey: "dogs_Id",
        as: "pets"
      });
      
    }
  };
  CareRequest.init({
    startDate: DataTypes.STRING,
    finishDate: DataTypes.STRING,
    post: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CareRequest',
  });
  return CareRequest;
};