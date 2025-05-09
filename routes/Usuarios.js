import { Router } from "express";
import {getUsuarios,getUsuario,postUsuarios,putUsuarios,deleteUsuario} from '../controllers/Usuarios.js';


const router =Router();

router.post("/", [] , postUsuarios);
router.get("/users", getUsuarios)
router.get("/:id", getUsuario);
router.put("/:id", putUsuarios);
router.delete("/:id", deleteUsuario);


export default router