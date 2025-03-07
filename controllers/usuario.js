const  Usuario=require('../models/usuario.js') ;

// 📌 Crear un nuevo usuario (POST)
const postUsuario = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ mensaje: "El cuerpo de la solicitud está vacío" });
    }

    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ mensaje: "Error al crear el usuario", error });
  }
};

// 📌 Obtener todos los usuarios (GET)
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ mensaje: "Error al obtener los usuarios", error });
  }
};

// 📌 Obtener un usuario por ID (GET)
const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ mensaje: "Error al obtener el usuario", error });
  }
};

// 📌 Actualizar un usuario por ID (PUT)
const putUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    if (!usuarioActualizado) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).json({ mensaje: "Error al actualizar el usuario", error });
  }
};
module.exports= { postUsuario, getUsuarios, getUsuario, putUsuario, };
