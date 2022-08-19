import db from '../../config/db.js'
import moment from 'moment';

export async function insertClientRepository(client){
const {name, address, phone } = client

await db.query(`
    INSERT INTO clients(name, address, phone)
    VALUES ($1, $2, $3)
`, [name, address, phone])

return
}

export async function clientOrders(clientId){
    
    const { rows: listOrders } = await db.query(`
        SELECT o.id AS "orderId", o.quantity, o."createdAt", o."totalPrice", c.name AS "cakeName" 
        FROM orders o
        JOIN cakes c ON o."cakeId" = c.id
        WHERE o."clientId" = $1
    `, [clientId])

    listOrders.map( (order) => {
        order.createdAt = moment(order.createdAt).format('YYYY-MM-DD HH:MM')
    })

    return listOrders
    }

export async function checkClientExist(id){
    const { rows: client} = await db.query(`
            SELECT * FROM clients
            WHERE clients.id = $1
    `, [id]);
    
    return client
}