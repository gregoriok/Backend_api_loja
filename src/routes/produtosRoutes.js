import express from "express";
import ProdutoController from "../controllers/produtoController.js";
import multer from 'multer'
import fs from 'fs'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = 'uploads/';
  
      // Cria o diretório se não existir
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
  
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

const routes = express.Router()

routes.get("/produtos", ProdutoController.listarprodutos);
routes.get("/produtos/:id", ProdutoController.buscarProduto);
routes.post("/produtos", upload.single('imagem'), ProdutoController.cadastrarProduto);
routes.put("/produtos/:id",upload.none(), ProdutoController.atualizarProduto);
routes.delete("/produtos/:id",ProdutoController.excluirProduto);

export default routes;