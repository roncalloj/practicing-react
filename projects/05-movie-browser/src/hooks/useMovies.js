import { useCallback, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ query }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorResult, setErrorResult] = useState(null);
	const previousQuery = useRef(query);

	const getMovies = useCallback(async ({ query }) => {
		if (query === previousQuery.current) return;

		try {
			setLoading(true);
			setErrorResult(null);
			previousQuery.current = query;
			const searchedMovies = await searchMovies({ query });
			if (typeof searchedMovies === 'string') {
				setErrorResult(searchedMovies);
				setMovies([]);
			}
			if (Array.isArray(searchedMovies)) setMovies(searchedMovies);
		} catch (e) {
			setErrorResult(e.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { movies, getMovies, loading, errorResult };
}
