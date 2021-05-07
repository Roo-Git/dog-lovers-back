'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Confirmation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Confirmation.belongsTo(models.Dog, {
        foreignKey: "dog_Id",
        as: "Dog owner"
      });
      Confirmation.belongsTo(models.Dog, {
        foreignKey: "user_Id",
        as: "Confirmation by owner"
      });
      Confirmation.belongsTo(models.Candidate, {
        foreignKey: "candidate_Id",
        as: "The baby sitter's candidacy"
      })
    }
  };
  Confirmation.init({
    confirmationByOwner: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Confirmation',
  });
  return Confirmation;
};