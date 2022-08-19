import chalk from "chalk";
import { checkClientExist, clientOrders, insertClientRepository  } from "../repositories.js/clientsRepositore.js";

export async function insertClientController(req, res) {
    const client = req.body
    console.log(chalk.yellow('client from body : \n '), client)

    try {
        
        await insertClientRepository(client)
        return res.sendStatus(201);
        
    } catch (err) {
        console.log(chalk.bold.red('Catch insertClient: '), err);
        return res.sendStatus(500);
    }

}

export async function getClientOrdersController(req, res){
    const {id} = req.params
    console.log('id of client :', id)
    try {

        const client = await checkClientExist(id)
        if(client.length == 0){
            return res.sendStatus(404)
        }

        const listOrders = await clientOrders(id)

        console.log('listOders :', listOrders)

        return res.sendStatus(200)

    } catch (err) {
        console.log(chalk.bold.red('Catch getClientOrdersController: '), err);
        return res.sendStatus(500);
    }

}