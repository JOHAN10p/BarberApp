const { Router } = require("express");
const { Client } = require("../db.js");

const router = Router();

router.post("/", async (req, res, next) => {
  const {
    NameClient,
    DocumentType,
    Document,
    Years,
    Direction,
    PhoneNumber,
    Email,
    YearDescription,
  } = req.body;

  try {
    const NewClient = await Client.create({
      NameClient,
      DocumentType,
      Document,
      Years,
      Direction,
      PhoneNumber,
      Email,
      YearDescription,
    });
    res.status(201).send(NewClient);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const Clients = await Client.findAll();
    res.status(200).send(Clients);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const Clients = await Client.findByPk(id);
    if (!Clients) {
      return res.status(404).send("Client not found");
    }
    await Clients.destroy();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

// -------------------------------------------------------------
module.exports = router;
