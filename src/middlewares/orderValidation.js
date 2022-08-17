import chalk from "chalk";
import orderSchema from "../schemas/orderSchema.js";

function orderValidation(req, res, next) {
    const order = req.body
    console.log(chalk.yellow('orderValidation... \n'))

    const {error} = orderSchema.validate(order, { abortEarly: false })

    if (error) {
        
        const errorMessages = error.details.map(item => item.message);
        console.log(chalk.red(errorMessages[0]))
        
        return res.status(400).send(errorMessages);
    }

    return next()
}

export default orderValidation;