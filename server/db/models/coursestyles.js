const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CourseStyles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Course }) {
      this.belongsTo(Course, { foreignKey: 'courseId' });

      // define association here
    }
  }
  CourseStyles.init({
    bgColor: DataTypes.STRING,
    img: DataTypes.STRING,
    direction: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CourseStyles',
  });
  return CourseStyles;
};
