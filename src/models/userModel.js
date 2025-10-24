const usuarios = [
    {id: 1, nombre: "Gustavo", email: "gustavo@gmail.com", edad: 23, rango: "adulto"},
    {id: 2, nombre: "Uriel", email: "uriel@gmail.com", edad: 22, rango: "joven"},
    {id: 3, nombre: "Ana", email: "ana@gmail.com", edad: 15, rango: "joven"},
    {id: 4, nombre: "Federico", email: "fede@gmail.com", edad: 80, rango: "anciano"}
]

const getUsuarios = async () => {
    return await usuarios
}

const getUsuariosPorEdad = async (rango) => {
    const resultado = usuarios.filter((e) => e.rango == rango)
    const cant = resultado.length
    return {
        total: cant,
        usuariosFiltrados: resultado
    }
}

const postUsuarios = async (user) => {
    user.id = usuarios[usuarios.length-1].id + 1
    usuarios.push(user)
    return await user
}

const putUsuarios = async (id, user) => {
    const index = usuarios.findIndex((e) => e.id == id)
    
    if(index == -1){
        return "Error. No se encontró el id."
    } else {
        user.id = Number(id)
        usuarios.splice(index, 1, user)
        return user
    }
}

export default {
    getUsuarios,
    getUsuariosPorEdad,
    postUsuarios,
    putUsuarios
}