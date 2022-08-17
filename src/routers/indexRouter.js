import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientsRouter from "./clientsRouter.js";
import ordersRouter from "./ordersRouter.js";

const indexRouter = Router()

indexRouter.use(cakesRouter)
indexRouter.use(clientsRouter)
indexRouter.use(ordersRouter)

export default indexRouter;