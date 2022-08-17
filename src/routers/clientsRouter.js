import { Router } from "express";
import { insertClientController } from "../controllers/clientsController.js";
import clientValidation from "../middlewares/clientValidation.js";

const clientsRouter = Router()

clientsRouter.post('/clients', clientValidation, insertClientController)

export default clientsRouter;