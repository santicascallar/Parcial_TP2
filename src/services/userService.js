//import userModel from "../models/userModel.js";
import Factory from "../models/dao.factory.js"

const userModel = await Factory("MEMORIA")

const getUsuarios = async () => {
    const usuarios = await userModel.getUsuarios()
    return usuarios
}

const getUsuariosPorEdad = async (rango) => {
    const usuarios = await userModel.getUsuariosPorEdad(rango)
    return usuarios
}

const postUsuarios = async (user) => {
    const usuario = await userModel.postUsuarios(user)
    return usuario
}

const putUsuarios = async (id, user) => {
    const usuario = await userModel.putUsuarios(id, user)
    return usuario
}

export default {
    getUsuarios,
    getUsuariosPorEdad,
    postUsuarios,
    putUsuarios
}