const mongoose = require ("mongoose");

const ProductosSchema = new mongoose.Schema({
    type: "object",
    properties: {
        numbering_range_id: { type: Number },

        reference_code: { type: "string" },
        observation: { type: "string" },
        payment_form: { type: "string" },
        payment_due_date: { type: "string", format: "date" },
        payment_method_code: { type: "string" },
        billing_period: {
            type: "object",
            properties: {
                start_date: { type: "string", format: "date" },
                start_time: { type: "string", pattern: "^\\d{2}:\\d{2}:\\d{2}$" },
                end_date: { type: "string", format: "date" },
                end_time: { type: "string", pattern: "^\\d{2}:\\d{2}:\\d{2}$" }
            },
            required: ["start_date", "start_time", "end_date", "end_time"]
        },
        customer: {
            type: "object",
            properties: {
                identification: { type: "string", pattern: "^\\d+$" },
                dv: { type: "string", pattern: "^\\d$" },
                company: { type: "string" },
                trade_name: { type: "string" },
                names: { type: "string", minLength: 1 },
                address: { type: "string", minLength: 1 },
                email: { type: "string", format: "email" },
                phone: { type: "string", pattern: "^\\d{10}$" },
                legal_organization_id: { type: "string", pattern: "^\\d+$" },
                tribute_id: { type: "string", pattern: "^\\d+$" },
                identification_document_id: { type: "string", pattern: "^\\d+$" },
                municipality_id: { type: "string", pattern: "^\\d+$" }
            },
            required: ["identification", "dv", "names", "address", "email", "phone", "legal_organization_id", "tribute_id", "identification_document_id", "municipality_id"]
        },
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
    },
    required: ["numbering_range_id", "reference_code", "observation", "payment_form", "payment_due_date", "payment_method_code", "billing_period", "customer", "items"]
});

module.exports = mongoose.model("factura", ProductosSchema);