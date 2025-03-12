
const Producto = require ('../models/productos.js')

// 📌 Crear un nuevo producto (POST)
const postProducto = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ mensaje: "El cuerpo de la solicitud está vacío" });
    }

    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error("Error al crear el producto", error);
    res.status(500).json({ mensaje: "Error al crear el producto", error });
  }
};

// 📌 Obtener todos los productos (GET)
const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener los productos", error);
    res.status(500).json({ mensaje: "Error al obtener los productos", error });
  }
};

// 📌 Obtener un producto por ID (GET)
const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error("Error al obtener el producto", error);
    res.status(500).json({ mensaje: "Error al obtener el producto", error });
  }
};

module.exports = { postProducto, getProductos, getProducto };

