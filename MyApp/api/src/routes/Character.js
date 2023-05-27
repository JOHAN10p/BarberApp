const { Router } = require("express");
const { Character } = require("../db.js");

const router = Router();

router.post("/", async (req, res, next) => {
  const { characterName } = req.body;
  /* console.log(characterName); */
  try {
    const NewCharacter = await Character.create({
      characterName,
    });
    res.status(201).send(NewCharacter);
  } catch (e) {
    next(e);
  }
});

// -------------------------------------------------------------
module.exports = router;
