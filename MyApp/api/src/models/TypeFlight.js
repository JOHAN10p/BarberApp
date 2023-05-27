const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "TypeFlight",
    {
      IdTypeFlight: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      TypeFlightName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
