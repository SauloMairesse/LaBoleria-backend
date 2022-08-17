import { Router } from "express";
import { insertCakeController } from "../controllers/cakeController.js";
import cakeValidation from "../middlewares/cakeValidation.js";

const cakesRouter = Router()

cakesRouter.post('/cakes', cakeValidation, insertCakeController)

export default cakesRouter;