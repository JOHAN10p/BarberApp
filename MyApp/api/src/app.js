const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");

const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");

require("./db.js");

const server = express();
server.name = "API";

server.use(cors()); // Agrega este middleware para permitir CORS

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use(setHeaders);

server.use("/", routes);

server.use(errorHandler);

module.exports = server;
