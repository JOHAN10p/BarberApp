const { Router } = require("express");
const { Product } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();

    // Crear arreglos separados para cada tipo de producto
    const type1Products = products.filter(
      (product) => product.TipoProduct === 1
    );
    const type2Products = products.filter(
      (product) => product.TipoProduct === 2
    );

    return res.status(200).json({
      type1Products,
      type2Products,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
