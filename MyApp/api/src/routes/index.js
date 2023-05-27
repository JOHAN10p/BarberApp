const { Router } = require("express");

//--------------------------------------------------------------
const CharactersRoutes = require("./Character.js");
const PilotRoutes = require("./ChurchRegister.js");
const TypeFlight = require("./TypeFlightR.js");
const ParkRoute = require("./Parks.js");
const ClientRoute = require("./ClientRoute.js");

//--------------------------------------------------------------

const router = Router();

//--------------------------------------------------------------
router.use("/Character", CharactersRoutes);
router.use("/RegisterChurch", PilotRoutes);
router.use("/Parks", ParkRoute);
router.use("/RegisterTypeFlight", TypeFlight);
router.use("/Client", ClientRoute);
//--------------------------------------------------------------

module.exports = router;
