import express from "express";
import ImageController from "../controllers/imagemController.js"

const routes = express.Router()

routes.get('/uploads/:imageName', ImageController.serveImage);

export default routes;