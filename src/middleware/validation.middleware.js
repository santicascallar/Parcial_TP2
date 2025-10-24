const validatePost = async (req, res, next) => {
    if (!req.body.nombre || !req.body.email || !req.body.edad || !req.body.rango) return res.send("Error, faltan datos!")
    next()
}

const validatePut = async (req, res, next) => {
    if (req.body.id) return res.send("Error, no se puede modificar el id!")
    next()
}

export default {
    validatePost,
    validatePut
}