import chalk from "chalk";
import dateSchema from "../schemas/dateSchema.js";

function dateValidation(req, res, next) {
    const {date} = req.query
    console.log('dateValidation : \n', date)

    if(date){
        const {error} = dateSchema.validate({date:date}, { abortEarly: false })
    
        if (error) {
            const errorMessages = error.details.map(item => item.message);
            console.log(chalk.red(errorMessages))
            
            return res.status(400).send(errorMessages);
        }
    
        return next()
    }

    return next()
}

export default dateValidation;