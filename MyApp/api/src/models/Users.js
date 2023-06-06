const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "users",
    {
      IdUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      NameUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LastNameUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      EmailUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      PasswordUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ImageUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
