import chalk from "chalk";
import cakeSchema from "../schemas/cakeSchema.js";

function cakeValidation(req, res, next) {
    const cake = req.body

    const {error} = cakeSchema.validate(cake, { abortEarly: false })

    if (error) {
        
        const errorMessages = error.details.map(item => item.message);
        console.log(chalk.red(errorMessages[0]))

        const errorUrlEmpty = "\"image\" is not allowed to be empty"
        const erroUrlInvalid = "\"image\" must be a valid uri"

        if (errorMessages[0] == errorUrlEmpty || errorMessages[0] == erroUrlInvalid) {
            return res.status(422).send(errorMessages)
        }
        
        return res.status(400).send(errorMessages);
    }

    return next()
}

export default cakeValidation;