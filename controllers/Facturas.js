import FacturaModel from '../models/Facturas.js';

// Crear factura
const postFacturas = async (req, res) => {
  try {
    const {
      numbering_range_id,
      reference_code,
      observation,
      payment_form,
      payment_due_date,
      payment_method_code,
      billing_period,
      customer,
      items,
    } = req.body;

    const factura = new FacturaModel({
      numbering_range_id,
      reference_code,
      observation,
      payment_form,
      payment_due_date,
      payment_method_code,
      billing_period,
      customer,
      items,
    });

    await factura.save();
    res.json({ factura });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al crear la factura' });
  }
};

// Obtener todas las facturas
const getFacturas = async (req, res) => {
  try {
    const facturas = await FacturaModel.find();
    res.json(facturas);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al obtener las facturas' });
  }
};

// Obtener una factura por ID
const getFactura = async (req, res) => {
  try {
    const factura = await FacturaModel.findById(req.params.id);
    res.json(factura);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al obtener la factura' });
  }
};

// Actualizar una factura
const putFactura = async (req, res) => {
  try {
    const factura = await FacturaModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(factura);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al actualizar la factura' });
  }
};

// Eliminar una factura por reference_code (usando el ID desde frontend)
const deleteFactura = async (req, res) => {
  try {
    const { id } = req.params;

    const factura = await FacturaModel.findOneAndDelete({ reference_code: id });

    if (!factura) {
      return res.status(404).json({ message: 'Factura no encontrada' });
    }

    res.status(200).json({ message: 'Factura eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar factura:', error);
    res.status(500).json({ message: 'Error al eliminar la factura' });
  }
};

export {
  getFacturas,
  getFactura,
  postFacturas,
  putFactura,
  deleteFactura,
};
