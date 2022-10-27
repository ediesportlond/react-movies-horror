import movies from "../movies";

export default function MovieList() {
    return (
        <section id="movie-list-container">
            {movies.map((movie)=>{
            return (
            <div key={movie.id} className="movie-card">
                <img className="movie-poster"
                    src={movie.posterURL} 
                    alt={movie.title} />
                <h3 className="movie-title">
                    {movie.title}
                </h3>
            </div>
            )})}
        </section>
    )
}