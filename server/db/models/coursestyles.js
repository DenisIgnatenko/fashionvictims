const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CourseStyles extends Model {
    static associate({ Course }) {
      this.belongsTo(Course, { foreignKey: 'courseId' });

      // define association here
    }
  }

  CourseStyles.init(
    {
      bgColor: DataTypes.STRING,
      img: DataTypes.STRING,
      direction: DataTypes.STRING,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CourseStyles',
    },
  );
  return CourseStyles;
};
