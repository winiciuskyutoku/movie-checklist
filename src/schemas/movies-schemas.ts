import Joi from "joi";
import { Movie } from "../protocols/movies-protocols";

export const movieSchema = Joi.object<Movie>({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.boolean().required()
})