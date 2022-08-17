import { Router } from "express";
import { orderController } from "../controllers/orderController.js";
import orderValidation from "../middlewares/orderValidation.js";

const ordersRouter = Router()

ordersRouter.post('/order', orderValidation, orderController)

export default ordersRouter;