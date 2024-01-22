import express from "express";
import connnectDB from "../config/dbConnect.js";
import routes from "../routes/index.js";

const conexao = await connnectDB();

conexao.on("error",(erro =>{
    console.error("erro na conexao ", erro)
  }))
  
  conexao.once("open",()=>{
    console.log("conexao efetuada com sucesso")
  })
// var session = require('express-session')
const app = express();
routes(app);

export default app;


