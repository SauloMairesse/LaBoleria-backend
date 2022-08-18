import { Router } from "express";
import { insertOrderController, ordersListController } from "../controllers/orderController.js";
import orderValidation from "../middlewares/orderValidation.js";

const ordersRouter = Router()

ordersRouter.post('/order', orderValidation, insertOrderController)
ordersRouter.get('/orders', ordersListController)

export default ordersRouter;