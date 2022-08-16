import { Router } from "express";
import cakesRouter from "./cakesRouter.js";

const indexRouter = Router()

indexRouter.use(cakesRouter)

export default indexRouter;