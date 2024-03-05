const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate({ Course }) {
      this.belongsTo(Course, { foreignKey: 'courseId' });
    }
  }

  Module.init(
    {
      name: DataTypes.STRING,
      courseId: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
      videoURL: DataTypes.STRING,
      article: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Module',
    },
  );
  return Module;
};
