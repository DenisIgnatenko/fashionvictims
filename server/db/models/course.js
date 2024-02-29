const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, CourseStyles, Module }) {
      this.hasOne(CourseStyles, { foreignKey: 'courseId' });
      this.hasMany(Module, { foreignKey: 'courseId' });
      this.belongsToMany(User, { through: 'PurchasedCourses', foreignKey: 'courseId' });
      this.belongsToMany(User, { through: 'Carts', foreignKey: 'courseId' });

      // define association here
    }
  }
  Course.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
