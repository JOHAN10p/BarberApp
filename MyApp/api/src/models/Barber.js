const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "barbers",
    {
      IdBarber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      NameBarber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LastNameBarber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      EmailBarber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      PasswordBarber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ImageBarber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
