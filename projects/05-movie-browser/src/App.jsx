import { useEffect, useRef, useState } from 'react';
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
			console.log(firstInput.current);
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
	const { movies } = useMovies();
	const { query, setQuery, error } = useQuery();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ query });
	};

	const handleChange = (event) => {
		setQuery(event.target.value);
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

			<main>
				<MoviesResults movies={movies} />
			</main>
		</section>
	);
}

export default App;
