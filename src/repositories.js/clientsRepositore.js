import db from '../../config/db.js'

export async function insertClientRepository(client){
const {name, address, phone } = client

await db.query(`
    INSERT INTO clients(name, address, phone)
    VALUES ($1, $2, $3)
`, [name, address, phone])

return
}

export async function clientOrders(clientId){

    console.log('repository clientsOrders :', clientId)

    const { rows: client} = await db.query(`
        SELECT * FROM clients
        WHERE clients.id = $1
    `, [clientId]);
    
    if(client.length == 0){
        return '404'
    }
    
    const { rows: listOrders } = await db.query(`
        SELECT * FROM orders
        WHERE orders."clientId" = $1
    `, [clientId])

    // console.log(listOrders)

    return listOrders
    }

export async function checkClientExist(id){
    const { rows: client} = await db.query(`
            SELECT * FROM clients
            WHERE clients.id = $1
    `, [id]);
    
    return client
}