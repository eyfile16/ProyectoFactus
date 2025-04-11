import { Router } from "express";
import { postFacturas, getFacturas, getFactura, putFactura, deleteFactura } from "../controllers/Facturas.js";

const router = Router();

router.get("/", getFactura); // ← posiblemente debería ser getFacturas
router.post("/", postFacturas);
router.get("/bills", getFacturas);
router.put("/:id", putFactura);
router.delete("/:id", deleteFactura); // ✅ Ruta para DELETE

export default router;
