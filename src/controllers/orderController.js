import chalk from "chalk";
import { cakeExist, clientExist, getOrdersList, insertOrder, orderById } from "../repositories.js/orderRepositorie.js";

export async function insertOrderController(req, res) {
    const order = req.body
    
    try {
        const client = await clientExist(order.clientId)
        const cake = await cakeExist(order.cakeId)

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

export async function orderByIdController(req, res){

    const {id} = req.params

    try {

        const orderList = await orderById(id)

        if(orderList.length == 0){
            return res.sendStatus(404)
        }

        return res.status(200).send(orderList)

    } catch (err) {
        console.log(chalk.red('Catch ordersListConstroller: \n'), err);
        return res.sendStatus(500);
    }
}