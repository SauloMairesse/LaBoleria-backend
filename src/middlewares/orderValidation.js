import chalk from "chalk";
import orderSchema from "../schemas/orderSchema.js";

function orderValidation(req, res, next) {
    const order = req.body

    const {error} = orderSchema.validate(order, { abortEarly: false })

    if (error) {
        
        const errorMessages = error.details.map(item => item.message);
        
        return res.status(400).send(errorMessages);
    }

    return next()
}

export default orderValidation;