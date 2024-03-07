const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Course }) {
      // define association here
      this.belongsToMany(Course, { through: 'PurchasedCourses', foreignKey: 'userId' });
      this.belongsToMany(Course, { through: 'Carts', foreignKey: 'userId' });
    }
  }

  User.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
