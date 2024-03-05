'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizResult extends Model {
    static associate(models) {
      QuizResult.belongsTo(models.User, { foreignKey: 'userId' });
      QuizResult.belongsTo(models.Module, { foreignKey: 'moduleId' });
    }
  }

  QuizResult.init(
    {
      userId: DataTypes.INTEGER,
      moduleId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'QuizResult',
    },
  );
  return QuizResult;
};
