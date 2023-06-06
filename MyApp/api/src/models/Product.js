const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "product",
    {
      IdProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      NameProduct: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ImageProduct: {
        type: DataTypes.STRING,
      },

      TipoProduct: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
