// Variables de entorno
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// Usando las variables de entorno HERE
/* const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; */

// Generamos la ruta de conexión para sequelize...
const sequelize = new Sequelize(
  `postgres://postgres:Leiderposada10-@localhost:5432/dbbarberprod`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// ***********************************************************
// ***********************************************************

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// ***********************************************************
// ***********************************************************

// En sequelize.models están todos los modelos importados como propiedades
// destructuring

/* const { Character } = sequelize.models;

Character.belongsTo(Character); */

// -------------------------------------------------------------
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
