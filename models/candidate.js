'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Candidate.init({
    post: DataTypes.STRING,
    confirmedBySitter: DataTypes.BOOLEAN,
    acceptedByOwner: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};