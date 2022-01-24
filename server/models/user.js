("use strict");


const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      role_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Role, {
      foreignKey: "userId",
      as: "userId",
    });
    User.hasMany(models.Post, {
      foreignKey: "userId",
      as: "postId",
    });
    User.hasMany(models.Comment, {
      foreignKey: "userId",
      as: "comments",
      onDelete: "CASCADE",
    });
  };

  return User;
};
