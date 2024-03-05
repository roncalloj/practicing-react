import { useCallback, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ query }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const previousQuery = useRef(query);

	const getMovies = useCallback(async ({ query }) => {
		if (query === previousQuery.current) return;

		try {
			setLoading(true);
			setError(null);
			previousQuery.current = query;
			const searchedMovies = await searchMovies({ query });
			setMovies(searchedMovies);
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { movies, getMovies, loading };
}
