const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Product, { foreignKey: 'userId', as: 'products' });
  };

  return User;
};

module.exports = UserModel;
