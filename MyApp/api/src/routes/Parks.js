const { Router } = require("express");
const { Park } = require("../db.js");

const router = Router();

router.post("/", async (req, res, next) => {
  const { ParkName, ParkNeighborhood, DirectionPark } = req.body;

  try {
    const NewPark = await Park.create({
      ParkName,
      ParkNeighborhood,
      DirectionPark,
    });
    res.status(201).send(NewPark);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const Parks = await Park.findAll();
    res.status(200).send(Parks);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const Parks = await Park.findByPk(id);
    if (!Parks) {
      return res.status(404).send("Parks not found");
    }
    await Parks.destroy();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

// -------------------------------------------------------------
module.exports = router;
