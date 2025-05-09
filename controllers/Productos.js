import Productos from '../models/Productos.js'

// Crear un nuevo producto
const postProductos = async (req, res) => {
    try {
        const {
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes,
        } = req.body;

        const productos = new Productos({
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes,
        });

        await productos.save();
        res.json({ productos });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error al crear el producto o servicio" });
    }
}

// Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error al obtener los productos o servicios" });
    }
}

// Obtener un producto por ID
const getProducto = async (req, res) => {
    try {
        const productos = await Productos.findById(req.params.id);
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error al obtener el producto o servicio" });
    }
}

// Actualizar un producto por ID
const putProducto = async (req, res) => {
    try {
        const productoActualizado = await Productos.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(productoActualizado);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error al actualizar el producto o servicio" });
    }
}

// Eliminar un producto por ID
const deleteProducto = async (req, res) => {
    try {
        await Productos.findByIdAndDelete(req.params.id);
        res.json({ message: "Producto o servicio eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error al eliminar el producto o servicio" });
    }
}

export {
    postProductos,
    getProductos,
    getProducto,
    putProducto,
    deleteProducto
};
