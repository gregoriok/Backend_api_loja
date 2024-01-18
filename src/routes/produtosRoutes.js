import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router()

routes.get("/produtos", ProdutoController.listarprodutos);
routes.get("/produtos/:id", ProdutoController.buscarProduto);
routes.post("/produtos", ProdutoController.cadastrarProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProduto);
routes.delete("/produtos/:id", ProdutoController.excluirProduto);

export default routes;