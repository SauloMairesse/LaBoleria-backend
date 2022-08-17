import chalk from "chalk";

export async function orderController(req, res) {
    const order = req.body
    console.log('order from body :\n', order)

    try {

        return res.sendStatus(201)
        
    } catch (err) {
        console.log(chalk.red('Catch order: \n'), err);
        return res.sendStatus(500);
    }

}