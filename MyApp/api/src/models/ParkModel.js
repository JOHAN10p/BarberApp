const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "park",
    {
      ParkId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      ParkName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ParkNeighborhood: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      DirectionPark: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
