'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizOption extends Model {
    static associate(models) {
      QuizOption.belongsTo(models.Quiz, { foreignKey: 'quizId' });
    }
  }

  QuizOption.init(
    {
      variant: DataTypes.STRING,
      isCorrect: DataTypes.BOOLEAN,
      comment: DataTypes.TEXT,
      quizId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'QuizOption',
    },
  );
  return QuizOption;
};
