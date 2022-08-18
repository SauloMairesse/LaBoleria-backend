import chalk from "chalk";
import orderSchema from "../schemas/orderSchema.js";

function dateValidation(req, res, next) {
    const {date} = req.query

    if(date){
        const {error} = dateSchema.validate(date, { abortEarly: false })
    
        if (error) {
            const errorMessages = error.details.map(item => item.message);
            console.log(chalk.red(errorMessages))
            
            return res.status(400).send(errorMessages);
        }
    
        return next()
    }
}

export default orderValidation;