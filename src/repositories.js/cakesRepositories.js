import db from '../../config/db.js'

export async function getListCakes(limit, offset,userId) {
    const { rows: cakes } = await db.query(`
        SELECT * FROM cakes
    `, []);
    
    return cakes;
}

export async function getCake(name){

        const { rows: cake} = await db.query(`
            SELECT * FROM cakes
            WHERE cakes.name = $1
        `, [name]);

    return cake;
}

export async function insertCake(cake){
    const {name, price, image, description} = cake

    await db.query(`
        INSERT INTO cakes(name,price,image,description)
        VALUES ($1, $2, $3, $4)
    `, [name, price,image,description])

    return
}