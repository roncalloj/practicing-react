import './App.css';
import { MoviesResults } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';

function App() {
	const { movies } = useMovies();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new window.FormData(event.target);
		const query = data.get('query');
	};

	return (
		<section className="page">
			<h1>Movie browser</h1>
			<header>
				<form onSubmit={handleSubmit}>
					<input name="query" placeholder="Amelie, Blade runner 2043, Rocky..." />
					<button type="submit">Search</button>
				</form>
			</header>

			<main>
				<MoviesResults movies={movies} />
			</main>
		</section>
	);
}

export default App;
