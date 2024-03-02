function ListOfmovies({ movies }) {
	return (
		<ul>
			{movies.map((movie) => (
				<li key={movie.id}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	);
}

function NoResult() {
	return <p>No results found</p>;
}

export function MoviesResults({ movies }) {
	const hasMovies = movies?.length > 0;

	return hasMovies ? <ListOfmovies movies={movies} /> : <NoResult />;
}
