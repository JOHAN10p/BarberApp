const { Router } = require("express");
const { Barbers } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const barber = await Barbers.findAll({
      attributes: [
        "IdBarber",
        "ImageBarber",
        "NameBarber",
        "LastNameBarber",
        "EmailBarber",
      ],
    });

    return res.status(200).json(barber);
  } catch (error) {
    next(error);
  }
});

//delete

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    // Encuentra y elimina el barbero por su IdBarber
    const deletedBarber = await Barbers.destroy({
      where: {
        IdBarber: id,
      },
    });

    if (deletedBarber === 0) {
      // Si no se encontró el barbero con el IdBarber proporcionado
      return res.status(404).json({ message: "No se encontró el barbero" });
    }

    return res.status(200).json({ message: "Barbero eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
});

//post

router.post("/", async (req, res, next) => {
  const {
    IdBarber,
    ImageBarber,
    NameBarber,
    LastNameBarber,
    EmailBarber,
    PasswordBarber,
  } = req.body;

  try {
    // Crea un nuevo barbero en la base de datos
    const newBarber = await Barbers.create({
      IdBarber,
      ImageBarber,
      NameBarber,
      LastNameBarber,
      EmailBarber,
      PasswordBarber,
    });

    return res.status(201).json(newBarber);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const {
    ImageBarber,
    NameBarber,
    LastNameBarber,
    EmailBarber,
    PasswordBarber,
  } = req.body;

  try {
    // Busca el barbero por su IdBarber
    const barber = await Barbers.findOne({ where: { IdBarber: id } });

    if (!barber) {
      // Si no se encontró el barbero con el IdBarber proporcionado
      return res.status(404).json({ message: "No se encontró el barbero" });
    }

    // Actualiza los datos del barbero
    barber.ImageBarber = ImageBarber;
    barber.NameBarber = NameBarber;
    barber.LastNameBarber = LastNameBarber;
    barber.EmailBarber = EmailBarber;
    barber.PasswordBarber = PasswordBarber;

    await barber.save();

    return res.status(200).json(barber);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
