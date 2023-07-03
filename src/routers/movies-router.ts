import { validateSchema } from "../middlewares/validate-schema";
import { deleteMovies, getMovies, postMovies, updateMovies } from "../controllers/movie-controllers";
import { Router } from "express";
import { movieSchema } from "../schemas/movies-schemas";

const movieRouter = Router()

movieRouter.get("/get-movies", getMovies)
movieRouter.post("/post-movies", validateSchema(movieSchema) ,postMovies)
movieRouter.put("/update-movies/:id", updateMovies)
movieRouter.delete("/delete-movies/:id", deleteMovies)

export default movieRouter