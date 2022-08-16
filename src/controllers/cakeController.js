import chalk from "chalk";
import { getListCakes } from "../repositories.js/cakesRepositories";

export async function cakes(req, res) {
    try {
        const cakesList = await getListCakes();
        console.log('cakesList :', cakesList)
        return res.sendStatus(201);
        
    } catch (err) {
        console.log(chalk.red('Catch cakes: '), err);
        return res.sendStatus(500);
    }
}