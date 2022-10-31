import movies from "../movies";
import Movie from "./Movie";

export default function MovieList() {
    return (
        <section id="movie-list-container">
            {movies.map((movie)=>(
                <Movie movie={movie} />
            ))}
        </section>
    )
}