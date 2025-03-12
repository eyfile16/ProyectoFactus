const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  identification: { type: String, required: true, match: /^\d+$/ },
  dv: { type: String, required: true, match: /^\d$/ },
  company: { type: String },
  trade_name: { type: String },
  names: { type: String, required: true, minlength: 1 },
  address: { type: String, required: true, minlength: 1 },
  email: { type: String, required: true, match: /.+@.+\..+/ },
  phone: { type: String, required: true, match: /^\d{10}$/ },
  legal_organization_id: { type: String, required: true, match: /^\d+$/ },
  tribute_id: { type: String, required: true, match: /^\d+$/ },
  identification_document_id: { type: String, required: true, match: /^\d+$/ },
  municipality_id: { type: String, required: true, match: /^\d+$/ },

  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemSchema', required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'servicio', required: true },
        
        quantity: { type: Number, required: true },
        discountRate: { type: Number, default: 0 },
        withholdingTaxes: [{
            code: { type: String, required: true },
            withholdingTaxRate: { type: Number, required: true }
        }]
    }]
});

module.exports = mongoose.model("Customer", CustomerSchema);
