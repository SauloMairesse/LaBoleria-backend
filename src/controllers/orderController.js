import chalk from "chalk";
import { cakeExist, clientExist } from "../repositories.js/orderRepositorie.js";

export async function orderController(req, res) {
    const order = req.body
    console.log(chalk.yellow('order from body :\n'), order)

    
    try {
        const client = await clientExist(order.clientId)
        const cake = await cakeExist(order.cakeId)

        console.log('cakeExist, clientExist : \n', cake, client)

        if(!client || !cake){
            return res.status(404).send('Client or Cake doesnt exist')
        }

        return res.sendStatus(201)
        
    } catch (err) {
        console.log(chalk.red('Catch order: \n'), err);
        return res.sendStatus(500);
    }

}