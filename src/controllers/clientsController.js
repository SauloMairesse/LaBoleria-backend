import chalk from "chalk";
import { getClient, insertClientRepository  } from "../repositories.js/clientsRepositore.js";

export async function insertClientController(req, res) {
    const client = req.body
    console.log(chalk.yellow('client from body : \n '), client)

    try {
        const alreadyExist = await getClient(client.name);
        console.log(chalk.yellow('does client already Exist ? : \n'), alreadyExist)
        
        if(alreadyExist.length == 0){
            await insertClientRepository(client)
            return res.sendStatus(201);
        }

        return res.status(409).send('Client Already Exist')
        
    } catch (err) {
        console.log(chalk.bold.red('Catch insertClient: '), err);
        return res.sendStatus(500);
    }

}