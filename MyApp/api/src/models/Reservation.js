const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "reservation",
    {
      IdReservation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      IdHorario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      horario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Valor por defecto para estado: deshabilitado
        validate: {
          isIn: [[0, 1]], // Validar que el estado solo sea 0 o 1
        },
      },
      barberoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
