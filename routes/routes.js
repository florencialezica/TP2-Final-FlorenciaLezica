import { Router } from "express";
import Controller from "../controllers/Controller.js";

const controller= new Controller()
const routes = Router();

routes.post("/", controller.createDonacion);
routes.get("/" , controller.listarDonaciones);


export default routes;