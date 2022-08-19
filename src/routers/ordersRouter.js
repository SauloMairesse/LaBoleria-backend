import { Router } from "express";
import { insertOrderController, orderByIdController, ordersListController } from "../controllers/orderController.js";
import dateValidation from "../middlewares/dateValidation.js";
import orderValidation from "../middlewares/orderValidation.js";

const ordersRouter = Router()

ordersRouter.post('/order', orderValidation, insertOrderController)
ordersRouter.get('/orders', dateValidation, ordersListController)
ordersRouter.get('/orders/:id', orderByIdController)

export default ordersRouter;