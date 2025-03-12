const express = require("express");
const { postFactura, getFacturas,getFactura } =require("../controllers/factura"); ;

const router = express.Router();

router.post("/", [ 
], postFactura);

router.get("/facturas/id",[
], getFacturas);
router.get("/facturas",[
],getFactura);
module.exports=router