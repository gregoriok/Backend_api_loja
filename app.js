import express from "express";
import connnectDB from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";

const conexao = await connnectDB();

conexao.on("error",(erro =>{
    console.error("erro na conexao ", erro)
  }))
  
  conexao.once("open",()=>{
    console.log("conexao efetuada com sucesso")
  })
// var session = require('express-session')
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS',);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'multipart/form-data')
  next();
});
routes(app);

export default app;


