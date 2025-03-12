const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')

const factura = require ('./routes/factura.js')
const productos = require ('./routes/productos.js')
const usuario = require ('./routes/usuario.js')


const app= express()
app.use(express.json())
app.use(cors())
app.use("/api/factura", factura)
app.use(express.static('..pruebaproyecto/pruebaproyecto'))
app.use("/api/productos",productos)
app.use("/api/usuario",usuario)
app.use(express.static("public"))

require('dotenv').config();

mongoose.connect(process.env.CNX_MONGO)
.then(() => console.log("Conectado a la base de datos"))
.catch((error) => console.log(error))
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))