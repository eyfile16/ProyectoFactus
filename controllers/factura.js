const Factura = require ("../models/factura.js")

const postFactura = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ mensaje: "El cuerpo de la solicitud está vacío" });
        }
        
        const nuevaFactura = new Factura(req.body);
        await nuevaFactura.save();
        res.status(201).json(nuevaFactura);
    } catch (error) {
        console.error("Error al crear la factura", error);
        res.status(500).json({ mensaje: "Error al crear la factura", error });
    }
};

const getFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find();
        res.status(200).json(facturas);
    } catch (error) {
        console.error("Error al obtener las facturas", error);
        res.status(500).json({ mensaje: "Error al obtener las facturas", error });
    }
};

const getFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const factura = await Factura.findById(id);
        if (!factura) {
            return res.status(404).json({ mensaje: "Factura no encontrada" });
        }
        res.status(200).json(factura);
    } catch (error) {
        console.error("Error al obtener la factura", error);
        res.status(500).json({ mensaje: "Error al obtener la factura", error });
    }
};

module.exports = {postFactura,getFacturas,getFactura};
