import { Request, Response } from "express";
import httpStatus from "http-status";
import { getMoviesRepository, postMoviesRepository } from "../repositories/movie-repositories";
import { deleteMoviesService, updateMoviesService } from "../services/movies-services";

export async function getMovies(req: Request, res: Response){
    try {
        const result = await getMoviesRepository()

        res.send(result)
    } catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function postMovies(req: Request, res: Response){
    try {
        await postMoviesRepository(req.body)

        res.status(httpStatus.CREATED).send({message: "Filme criado com sucesso!"})
    } catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function updateMovies(req: Request, res: Response){
    const {id} = req.params
    const movieId = Number(id)

    try {
        await updateMoviesService(movieId)

        res.status(httpStatus.OK).send({message: "Filme visto"})
    } catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function deleteMovies(req: Request, res: Response){
    const {id} = req.params
    const movieId = Number(id)

    try {
        await deleteMoviesService(movieId)

        res.status(httpStatus.OK).send({mesasge: "filme deletado com sucesso"})
    } catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}