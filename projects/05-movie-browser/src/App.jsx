import debounce from 'just-debounce-it';
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { MoviesResults } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import { useQuery } from './hooks/useQuery.js';

function App() {
	const { query, setQuery, errorQuerry } = useQuery();
	const { movies, loading, getMovies, errorResult } = useMovies({ query });

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
				{errorQuerry && <p className="error">{errorQuerry}</p>}
			</header>

			<main>
				{loading ? (
					<p>searching...</p>
				) : (
					(movies || errorResult) && <MoviesResults movies={movies} errorResult={errorResult} />
				)}
			</main>
		</section>
	);
}

export default App;
