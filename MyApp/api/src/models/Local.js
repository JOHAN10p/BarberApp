const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "local",
    {
      IdLocal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      NameLocal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LocalImage1: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LocalImage2: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LocalImage3: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LocalImage4: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LocalImage5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
