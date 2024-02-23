import produto  from "../models/Produto.js";


class ProdutoController{

//MÉTODOS GET
    static async listarprodutos(req, res){
        try{
            const listaProdutos = await produto.find({});
            res.status(200).json(listaProdutos);
        }catch(erro){
            res.status.json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async buscarProduto(req, res){
        try{
            let id = req.params.id;
            const produtoEncontrado = await produto.findById(id);
            res.status(200).json(produtoEncontrado);
        }catch(erro){
            res.status.json({ message: `${erro.message} - Falha na busca do produto`});
        }
    }

//MÉTODOS POST
    static async cadastrarProduto(req, res){
        try{
            const produtocadastrar = req.body;
            const imagem = {
                filename: req.file.filename,
                path: req.file.path,
            };
            produtocadastrar.imagem = imagem
            const novoProduto = await produto.create(produtocadastrar);
            res.status(201).json({
                message: "Criado com Sucesso",
                produto: novoProduto});
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar Produto`});
        }
    }

///MÉTODOS PUT
    static async atualizarProduto(req, res){
        try{
            let id = req.params.id;
            const imagem = {
                filename: req.file.filename,
                path: req.file.path,
            };
            req.body.imagem = imagem
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado com sucesso"});
        }catch(erro){
            res.status.json({ message: `${erro.message} - Falha na atualização do produto`});
        }
    }

    static async excluirProduto(req, res){
        try{
            let id = req.params.id;
            await produto.findByIdAndDelete(id);
            res.status(200).json({message: "Produto excluido com Sucesso"});
        }catch(erro){
            res.status.json({ message: `${erro.message} - Falha na exclusão do registro`});
        }
    }
};



export default ProdutoController;