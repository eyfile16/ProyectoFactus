const Producto = require ('../models/productos.js')

const crearFactura = async (req, res) => {
  try {
    const nuevaFactura = new Factura(req.body);
    await nuevaFactura.save();
    res.status(201).json(nuevaFactura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las facturas
const obtenerFacturas = async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.status(200).json(facturas);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una factura por ID
const actualizarFactura = async (req, res) => {
  try {
    const facturaActualizada = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!facturaActualizada) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
    res.status(200).json(facturaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una factura por ID
const eliminarFactura = async (req, res) => {
  try {
    const facturaEliminada = await Factura.findByIdAndDelete(req.params.id);
    if (!facturaEliminada) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
    res.status(200).json({ message: "Factura eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearFactura,
  obtenerFacturas,
  obtenerFacturaPorId,
  actualizarFactura,
  eliminarFactura,
};
