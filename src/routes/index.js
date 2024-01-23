import express from "express";
import produtos from "./produtosRoutes.js"
import usuarios from "./usuarioRoutes.js";
import imagens from "./ImagensRoutes.js"

const routes = (app) =>{
    app.route("/").get((req, res)=> res.status(200).send("Curso de node.js"));

    app.use(express.json(), produtos, usuarios, imagens);
};

export default routes;