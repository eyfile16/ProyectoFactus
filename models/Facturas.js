import mongoose from "mongoose";

const FacturasSchema = new mongoose.Schema({
        numbering_range_id:  { type: Number, min: 1 },
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
            identification: { type: String },
            dv: { type: String },
            company: { type: String },
            trade_name: { type: String },
            names: { type: String },
            address: { type: String },
            email: { type: String },
            phone: { type: String },
            legal_organization_id: { type: String },
            tribute_id: { type: String },
            identification_document_id: { type: String },
            municipality_id: { type: String }
        },
        items: [{
            scheme_id: { type: String },
            code_reference: { type: String },
            name: { type: String },
            quantity: { type: Number },
            discount_rate: { type: Number },
            price: { type: Number },
            tax_rate: { type: Number },
            unit_measure_id: { type: Number },
            standard_code_id: { type: Number },
            is_excluded: { type: Number },
            tribute_id: { type: Number },
            withholding_taxes: { type: Array, default: [] }
        }]
});

export default mongoose.model('Facturas', FacturasSchema);

