const { Router } = require("express");
const { TypeFlight } = require("../db.js");

const router = Router();

router.post("/", async (req, res, next) => {
  const { TypeFlightName } = req.body;
  /* console.log(characterName); */
  try {
    const NewFlight = await TypeFlight.create({
      TypeFlightName,
    });
    res.status(201).send(NewFlight);
  } catch (e) {
    next(e);
  }
});

// -------------------------------------------------------------
module.exports = router;
