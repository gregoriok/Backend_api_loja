import mongoose, { model, mongo, version } from "mongoose";


const UsuarioSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    user: {type: String, required: true},
    senha: {type: String, required: true}
}, {versionKey: false}
);

const usuario = mongoose.model("usuario", UsuarioSchema, 'usuario');

export default usuario;