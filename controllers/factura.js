const Factura = require("../models/factura.js");

// Crear una nueva factura
const crearFactura = async (req, res) => {
  try {
    const { customer, reference_code, items } = req.body;

    // Validar que los campos obligatorios existan
    if (!reference_code) {
      return res.status(400).json({ error: "El campo código de referencia es obligatorio." });
    }
    if (!items || !items.length) {
      return res.status(400).json({ error: "El campo items es obligatorio." });
    }

    // Crear nueva factura
    const nuevaFactura = new Factura({ customer, reference_code, items });
    await nuevaFactura.save();

    res.status(201).json(nuevaFactura);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la factura", detalles: error.message });
  }
};

// Obtener todas las facturas
const obtenerFacturas = async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.status(200).json(facturas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las facturas", detalles: error.message });
  }
};

// Obtener una factura por ID
const obtenerFacturaPorId = async (req, res) => {
  try {
    const factura = await Factura.findById(req.params.id);
    if (!factura) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
    res.status(200).json(factura);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la factura", detalles: error.message });
  }
};

// Actualizar una factura
const actualizarFactura = async (req, res) => {
  try {
    const facturaActualizada = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!facturaActualizada) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
    res.status(200).json(facturaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la factura", detalles: error.message });
  }
};

// Eliminar una factura
const eliminarFactura = async (req, res) => {
  try {
    const facturaEliminada = await Factura.findByIdAndDelete(req.params.id);
    if (!facturaEliminada) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
    res.status(200).json({ mensaje: "Factura eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la factura", detalles: error.message });
  }
};

module.exports = {
  crearFactura,
  obtenerFacturas,
  obtenerFacturaPorId,
  actualizarFactura,
  eliminarFactura,
};
