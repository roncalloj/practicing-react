import debounce from 'just-debounce-it';
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { MoviesResults } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';

function useQuery() {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(null);
	const firstInput = useRef(true);

	useEffect(() => {
		if (firstInput.current) {
			firstInput.current = query === '';
			return;
		}
		if (query === '') {
			setError('No movie title to browse');
			return;
		}
		setError(null);
	}, [query]);

	return { query, setQuery, error };
}

function App() {
	const { query, setQuery, error } = useQuery();
	const { movies, loading, getMovies } = useMovies({ query });

	const debounceQuery = useCallback(
		debounce((query) => {
			getMovies({ query });
		}, 700),
		[]
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		getMovies({ query });
	};

	const handleChange = (event) => {
		const newSearch = event.target.value;
		setQuery(newSearch);
		debounceQuery(newSearch);
	};

	return (
		<section className="page">
			<h1>Movie browser</h1>
			<header>
				<form onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						value={query}
						name="query"
						placeholder="Amelie, Blade runner 2043, Rocky..."
					/>
					<button type="submit">Search</button>
				</form>
				{error && <p className="error">{error}</p>}
			</header>

			<main>{loading ? <p>searching...</p> : <MoviesResults movies={movies} />}</main>
		</section>
	);
}

export default App;
