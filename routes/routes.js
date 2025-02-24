import { Router } from "express";
import Controller from "../controllers/Controller.js";

const controller= new Controller()
const routes = Router();

routes.get("/", controller.metodo);


export default routes;