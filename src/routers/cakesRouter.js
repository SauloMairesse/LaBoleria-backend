import { Router } from "express";
import cakeValidation from "../middlewares/cakeValidation.js";

const cakesRouter = Router()

cakesRouter.post('/cakes', cakeValidation)

export default cakesRouter;