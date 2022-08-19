import { Router } from "express";
import { getClientOrdersController, insertClientController } from "../controllers/clientsController.js";
import clientValidation from "../middlewares/clientValidation.js";

const clientsRouter = Router()

clientsRouter.post('/clients', clientValidation, insertClientController)
clientsRouter.get('/clients/:id/orders', getClientOrdersController)

export default clientsRouter;