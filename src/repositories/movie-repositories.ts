import { Movie } from "../protocols/movies-protocols";
import { db } from "../database/connection-database";

export async function getMoviesRepository(){
    const result = await db.query(`SELECT * FROM filmes;`)

    return result.rows
}

export async function postMoviesRepository(movie: Movie){
    const {name, platform, genre, status} = movie

    return await db.query(`INSERT INTO filmes (name, platform, genre, status) VALUES ($1, $2, $3, $4);`, [name, platform, genre, status])
}

export async function updateMoviesRepository(id: number){
    const result = await db.query(`SELECT * FROM filmes WHERE id = $1;`,[id])

    return result.rows[0]

}

export async function deleteMoviesRepository(id: number){
    const result = await db.query(`SELECT * FROM filmes WHERE id = $1;`, [id])

    return result.rows[0]
}