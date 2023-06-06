const { Router } = require("express");

//--------------------------------------------------------------
const login = require("./login.js");
const Local = require("./Local.js");
const User = require("./userR.js");
const Barber = require("./BarberR.js");
const Product = require("./ProductR.js");

//--------------------------------------------------------------

const router = Router();

//--------------------------------------------------------------
router.use("/login", login);
router.use("/Local", Local);
router.use("/user", User);
router.use("/barber", Barber);
router.use("/product", Product);

//--------------------------------------------------------------

module.exports = router;
