import express from "express"
import userController from "../controller/userController.js"
import validationMiddleware from "../middleware/validation.middleware.js"

const router = express.Router()

router.get("/usuarios", userController.getUsuarios)
router.get("/usuarios/edad/:rango", userController.getUsuariosPorEdad)
router.post("/usuarios", validationMiddleware.validatePost, userController.postUsuarios)
router.put("/usuarios/:id", validationMiddleware.validatePut, userController.putUsuarios)

export default router