const express = require("express");
const { postFactura, getFacturas, getFactura } = require("../controllers/factura"); // ✅ Importación correcta

const router = express.Router();

router.post("/", postFactura);
router.get("/facturas", getFacturas);
router.get("/facturas/:id", getFactura);  // 🔥 Asegúrate de que esta ruta acepta un ID

module.exports = router;
