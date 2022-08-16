import db from '../../config/db.js'

export async function getListCakes(limit, offset,userId) {
    const { rows: cakes } = await db.query(`
        SELECT * FROM cakes
    `, []);
    
    return cakes;
}