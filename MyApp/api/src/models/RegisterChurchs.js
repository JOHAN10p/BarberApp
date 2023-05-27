const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "church",
    {
      ChurchId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      ChurchName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ChurchType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
