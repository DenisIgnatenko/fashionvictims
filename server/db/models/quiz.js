'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      Quiz.belongsTo(models.Module, { foreignKey: 'moduleId' });
      Quiz.hasMany(models.QuizOption, { foreignKey: 'quizId', as: 'options' });
    }
  }

  Quiz.init(
    {
      question: DataTypes.STRING,
      moduleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Quiz',
    },
  );
  return Quiz;
};
