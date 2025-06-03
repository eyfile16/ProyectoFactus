import { Router } from "express";
import {postProductos,getProductos,getProducto,putProducto,deleteProducto} from '../controllers/Productos.js';

const router = Router();

router.post("/", postProductos);
router.get("/", getProductos);
router.get("/:id", getProducto);
router.put("/:id", putProducto);
router.delete("/:id", deleteProducto);

export default router;
