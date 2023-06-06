const { Router } = require("express");
const { Users, Barbers } = require("../db.js");

const router = Router();

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la tabla de usuarios por correo electrónico
    const user = await Users.findOne({ where: { EmailUser: email } });

    if (!user) {
      // El usuario no existe en la tabla de usuarios
      // Buscar en la tabla de barberos por correo electrónico
      const barber = await Barbers.findOne({ where: { EmailBarber: email } });

      if (!barber) {
        // Ni el usuario ni el barbero existen
        return res.status(404).json({ message: "User not found" });
      }

      // Coincidencia encontrada en la tabla de barberos
      if (barber.PasswordBarber !== password) {
        // La contraseña no coincide
        return res.status(401).json({ message: "Invalid password" });
      }

      // Inicio de sesión exitoso para el barbero con indicador "root"
      return res
        .status(200)
        .json({ message: "Login successful", barber, isRoot: true });
    }

    // Coincidencia encontrada en la tabla de usuarios
    if (user.PasswordUser !== password) {
      // La contraseña no coincide
      return res.status(401).json({ message: "Invalid password" });
    }

    // Inicio de sesión exitoso para el usuario
    return res
      .status(200)
      .json({ message: "Login successful", user, isRoot: false });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
