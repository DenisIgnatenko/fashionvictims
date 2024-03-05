const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Course }) {
      // define association here
      this.belongsTo(Course, { foreignKey: 'courseId' });
    }
  }
  Module.init({
    name: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    videoURL: DataTypes.STRING,
    article: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};
