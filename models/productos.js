const mongoose = require ("mongoose");

const ProductosyServiciosSchema = new mongoose.Schema({
        type: "object",
        properties: {
            items: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        code_reference: { type: "string" },
                        name: { type: "string", minLength: 1 },
                        quantity: { type: "integer", minimum: 1 },
                        discount_rate: { type: "number", minimum: 0 },
                        price: { type: "number", minimum: 0 },
                        tax_rate: { type: "string", pattern: "^\\d+(\\.\\d{1,2})?$" },
                        unit_measure_id: { type: "integer", minimum: 1 },
                        standard_code_id: { type: "integer", minimum: 1 },
                        is_excluded: { type: "integer", enum: [0, 1] },
                        tribute_id: { type: "integer", minimum: 1 },
                        withholding_taxes: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: { type: "string" },
                                    withholding_tax_rate: { type: "string", pattern: "^\\d+(\\.\\d{1,2})?$" }
                                },
                                required: ["code", "withholding_tax_rate"]
                            }
                        }
                    },
                    required: ["code_reference", "name", "quantity", "discount_rate", "price", "tax_rate", "unit_measure_id", "standard_code_id", "is_excluded", "tribute_id", "withholding_taxes"]
                }
            }
        }
    });


module.exports = mongoose.model("productos",  ProductosyServiciosSchema);