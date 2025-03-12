const express = require("express");
const {  postProducto, getProductos, getProducto  } =require("../controllers/productos"); ;

const router = express.Router();

router.post("/", [ 
], postProducto);

router.get("/productos/id",[
], getProductos);
router.get("/productos",[
],getProducto);
module.exports=router