import userModel from "./userModel.js"

const Factory = async (tipo) => {
    switch (tipo) {
        case "MEMORIA":
            return await userModel
        default:
            return await userModel
    }
}

export default Factory