const  Usuario=require('../models/usuario.js') ;

exports.createFactura = async (req, res) => {
  try {
    const nuevaFactura = new Factura(req.body);
    await nuevaFactura.save();
    res.status(201).json({ message: "Factura creada con éxito", factura: nuevaFactura });
  } catch (error) {
    res.status(400).json({ message: "Error al crear la factura", error: error.message });
  }
};

// Obtener todas las facturas
exports.getFacturas = async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.status(200).json(facturas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener facturas", error: error.message });
  }
};

// Obtener una factura por ID
exports.getFacturaById = async (req, res) => {
  try {
    const factura = await Factura.findById(req.params.id);
    if (!factura) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }
    res.status(200).json(factura);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la factura", error: error.message });
  }
};

// Actualizar una factura por ID
exports.updateFactura = async (req, res) => {
  try {
    const facturaActualizada = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!facturaActualizada) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }
    res.status(200).json({ message: "Factura actualizada con éxito", factura: facturaActualizada });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la factura", error: error.message });
  }
};

// Eliminar una factura por ID
exports.deleteFactura = async (req, res) => {
  try {
    const facturaEliminada = await Factura.findByIdAndDelete(req.params.id);
    if (!facturaEliminada) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }
    res.status(200).json({ message: "Factura eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la factura", error: error.message });
  }
};
