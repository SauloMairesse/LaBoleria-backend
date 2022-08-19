import chalk from "chalk";
import dateSchema from "../schemas/dateSchema.js";

function dateValidation(req, res, next) {
    const {date} = req.query

    if(date){
        const {error} = dateSchema.validate({date:date}, { abortEarly: false })
    
        if (error) {
            const errorMessages = error.details.map(item => item.message);
            
            return res.status(400).send(errorMessages);
        }
    
        return next()
    }

    return next()
}

export default dateValidation;