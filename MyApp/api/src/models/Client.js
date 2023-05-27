const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "client",
    {
      ClientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      NameClient: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      DocumentType: {
        type: DataTypes.INTEGER,
      },

      Document: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Years: {
        type: DataTypes.INTEGER,
      },

      Direction: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      YearDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
