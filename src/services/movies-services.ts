import { deleteMoviesRepository, updateMoviesRepository } from "../repositories/movie-repositories";
import { db } from "../database/connection-database";

export async function updateMoviesService(id: number){
    const result = await updateMoviesRepository(id)

    if(result.status === false){
        return await db.query(`UPDATE filmes SET status = true WHERE id = $1;`, [id])
    }

    return await db.query(`UPDATE filmes SET status = false WHERE id = $1;`, [id])
}

export async function deleteMoviesService(id: number){
    const result = await deleteMoviesRepository(id)

    console.log(result)

    if(!result){
        throw Error(`Esse filme nao existe!`)
    }

    return await db.query(`DELETE FROM filmes WHERE id = $1;`, [id])
}
