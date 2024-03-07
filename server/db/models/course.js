const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({ User, CourseStyles, Module, PurchasedCourse }) {
      this.hasOne(CourseStyles, { foreignKey: 'courseId' });
      this.hasMany(Module, { foreignKey: 'courseId' });
      this.belongsToMany(User, { through: 'PurchasedCourses', foreignKey: 'courseId' });
      this.belongsToMany(User, { through: 'Carts', foreignKey: 'courseId' });
    }
  }

  Course.init(
    {
      authorId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      duration: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Course',
    },
  );
  return Course;
};
