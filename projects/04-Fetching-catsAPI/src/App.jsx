import '../style.css';
import { useImages } from './hooks/useImages';
import { useRandomFact } from './hooks/useRandomFact';

export function App() {
	const { fetchedFact, newCatFact } = useRandomFact();
	const { imageURL } = useImages({ fetchedFact });

	const handleClick = async () => {
		newCatFact();
	};

	return (
		<main>
			<h1>FetchedCats</h1>
			{fetchedFact && <p>{fetchedFact}</p>}
			{imageURL && <img src={imageURL} alt={`Image got from the first word of ${fetchedFact}`} />}
			<button onClick={handleClick}>Get another fact</button>
		</main>
	);
}
