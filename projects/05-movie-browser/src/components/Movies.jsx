function ListOfmovies({ movies }) {
	return (
		<ul className="movies">
			{movies.map((movie) => (
				<li className="movie" key={movie.id}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	);
}

function NoResult({ errorResult }) {
	return <p>{errorResult}</p>;
}

export function MoviesResults({ movies, errorResult }) {
	const hasMovies = movies?.length > 0;

	return hasMovies ? <ListOfmovies movies={movies} /> : <NoResult errorResult={errorResult} />;
}
