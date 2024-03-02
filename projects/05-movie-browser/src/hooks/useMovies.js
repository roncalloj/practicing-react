import noResults from '../mocks/no_results.json';
import withResults from '../mocks/with_results.json';

export function useMovies() {
	const movies = withResults.Search;

	const eachMovie = movies?.map((movie) => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster,
	}));

	return { movies: eachMovie };
}
