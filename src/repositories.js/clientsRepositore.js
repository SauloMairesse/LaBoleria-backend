import db from '../../config/db.js'

export async function getClient(name){

    const { rows: client} = await db.query(`
        SELECT * FROM clients
        WHERE clients.name = $1
    `, [name]);

return client;
}

export async function insertClientRepository(client){
const {name, address, phone } = client

await db.query(`
    INSERT INTO clients(name,address,phone)
    VALUES ($1, $2, $3)
`, [name, address, phone])

return
}