const { Router } = require("express");
const { Church } = require("../db.js");

const router = Router();

router.post("/", async (req, res, next) => {
  const { ChurchName, ChurchType } = req.body;
  /* console.log(characterName); */
  try {
    const NewChurch = await Church.create({
      ChurchName,
      ChurchType,
    });
    res.status(201).send(NewChurch);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const churches = await Church.findAll();
    res.status(200).send(churches);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const church = await Church.findByPk(id);
    if (!church) {
      return res.status(404).send("Church not found");
    }
    await church.destroy();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

// -------------------------------------------------------------
module.exports = router;
