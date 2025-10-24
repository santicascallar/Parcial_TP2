import userService from "../services/userService.js";

const getUsuarios = async (req, res) => {
    const usuarios = await userService.getUsuarios()
    if(usuarios.length === 0) res.send("No hay datos!")
    res.send(usuarios)
}

const getUsuariosPorEdad = async (req, res) => {
    const { rango } = req.params
    const usuarios = await userService.getUsuariosPorEdad(rango)
    res.send(usuarios)
}


const postUsuarios = async (req, res) => {
    const user = req.body
    const usuario = await userService.postUsuarios(user)
    res.send(usuario)
}

const putUsuarios = async (req, res) => {
    const { id } = req.params
    const user = req.body
    const usuario = await userService.putUsuarios(id, user)
    res.send(usuario)
}

export default {
    getUsuarios,
    getUsuariosPorEdad,
    postUsuarios,
    putUsuarios
}