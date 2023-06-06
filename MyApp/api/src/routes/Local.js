const { Router } = require("express");
const { Local } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const locals = await Local.findAll();
    const images = locals.map((local) => [
      local.LocalImage1,
      local.LocalImage2,
      local.LocalImage3,
      local.LocalImage4,
      local.LocalImage5,
    ]);

    return res.status(200).json({ locals, images });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
