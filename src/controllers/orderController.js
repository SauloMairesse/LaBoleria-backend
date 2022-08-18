import chalk from "chalk";
import { cakeExist, clientExist, getOrdersList, insertOrder } from "../repositories.js/orderRepositorie.js";

export async function insertOrderController(req, res) {
    const order = req.body
    console.log(chalk.yellow('order from body :\n'), order)
    
    try {
        const client = await clientExist(order.clientId)
        const cake = await cakeExist(order.cakeId)

        console.log('cakeExist, clientExist : \n', cake, client)

        if(!client || !cake){
            return res.status(404).send('Client or Cake doesnt exist in dataBase')
        }

        await insertOrder(order)

        return res.sendStatus(201)
        
    } catch (err) {
        console.log(chalk.red('Catch order: \n'), err);
        return res.sendStatus(500);
    }

}

export async function ordersListController(req, res){

    const {date} = req.query
    console.log(chalk.bold.yellow('(query string) date : \n'), date)

    try {
        const ordersList = await getOrdersList()
        
        if(ordersList.length == 0){
            return res.status(404).send(ordersList)
        }
        
        if(date){
           const ordersOnDate = ordersList.filter( order => order.createdAt.includes(date))
           if(ordersOnDate.length == 0){
             return res.status(404).send(ordersOnDate)
           }
           return res.status(200).send(ordersOnDate)
        }

        return res.status(200).send(ordersList)

    } catch (err) {
        console.log(chalk.red('Catch ordersListConstroller: \n'), err);
        return res.sendStatus(500);
    }
}