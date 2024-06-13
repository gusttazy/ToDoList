module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {});
    User.associate = function(models) {
      User.hasMany(models.Task, { foreignKey: 'userId', as: 'tasks' });
    };
    return User;
  };
  