import mongoose, { model, mongo, version } from "mongoose";


const produtoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    tamanho: {type: String, required: true},
    imagem: {filename: String,
        Path: String}
}, {versionKey: false}
);

const produto = mongoose.model("produtos", produtoSchema);

export default produto;