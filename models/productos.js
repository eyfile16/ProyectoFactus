const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  code_reference: { type: String, required: true },
  name: { type: String, required: true, minlength: 1 },
  quantity: { type: Number, required: true, min: 1 },
  discount_rate: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  tax_rate: { type: String, required: true, match: /^\d+(\.\d{1,2})?$/ },
  unit_measure_id: { type: Number, required: true, min: 1 },
  standard_code_id: { type: Number, required: true, min: 1 },
  is_excluded: { type: Number, required: true, enum: [0, 1] },
  tribute_id: { type: Number, required: true, min: 1 }
});

module.exports = ItemSchema;