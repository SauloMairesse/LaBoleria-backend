import chalk from "chalk";
import clientSchema from "../schemas/clientSchema.js";

function clientsValidation(req, res, next) {
    const client = req.body
    // console.log(chalk.yellow('client :'), client)

    const {error} = clientSchema.validate(client, { abortEarly: false })

    if (error) {
        
        const errorMessages = error.details.map(item => item.message);

        return res.status(400).send(errorMessages);
    }

    return next()
}

export default clientsValidation;