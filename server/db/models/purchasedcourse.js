'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchasedCourse extends Model {
    static associate(models) {
      this.belongsTo(models.Course, { foreignKey: 'courseId', as: 'Course' });
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
    }
  }

  PurchasedCourse.init(
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'PurchasedCourse',
    },
  );
  return PurchasedCourse;
};
