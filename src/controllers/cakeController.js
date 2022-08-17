import chalk from "chalk";
import { getCake, insertCake } from "../repositories.js/cakesRepositories.js";

export async function insertCakeController(req, res) {
    const cake = req.body
    // console.log('cake : ', cake)

    try {
        const alreadyExist = await getCake(cake.name);
        // console.log('cake :', alreadyExist)
        
        if(alreadyExist.length == 0){
            await insertCake(cake)
            return res.sendStatus(201);
        }

        return res.status(409).send('Cake Already Exist')
        
    } catch (err) {
        console.log(chalk.red('Catch cakes: '), err);
        return res.sendStatus(500);
    }

}