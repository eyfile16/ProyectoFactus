const express = require("express");
const {  postUsuario, getUsuarios, getUsuario, putUsuario, } =require("../controllers/usuario"); ;

const router = express.Router();

router.post("/", [ 
], postUsuario);

router.get("/usuarios/id",[
], getUsuarios);
router.get("/usuarios",[
],getUsuario);
router.put("/usuarios",[
], putUsuario);
module.exports=router