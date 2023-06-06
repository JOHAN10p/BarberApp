const { Router } = require("express");
const { Users } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.findAll({
      attributes: ["IdUser", "ImageUser"],
    });

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
