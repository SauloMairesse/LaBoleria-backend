import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientsRouter from "./clientsRouter.js";

const indexRouter = Router()

indexRouter.use(cakesRouter)
indexRouter.use(clientsRouter)

export default indexRouter;