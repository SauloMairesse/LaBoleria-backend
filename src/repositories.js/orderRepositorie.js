import db from '../../config/db.js'

export async function clientExist(clientId){

    const { rows: client} = await db.query(`
        SELECT * FROM clients
        WHERE clients.id = $1
    `, [clientId]);

    if(client.length == 0){
        return false
    }

    return true;
}

export async function cakeExist(cakeId){

    const { rows: cake} = await db.query(`
        SELECT * FROM cakes
        WHERE cakes.id = $1
    `, [cakeId]);

    if(cake.length == 0){
        return false
    }

    return true;
}
