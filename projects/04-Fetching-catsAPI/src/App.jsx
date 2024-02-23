import { useEffect, useState } from 'react';
import '../style.css';
import { getCatsFacts } from './services/getFacts';

export function App() {
	const [fetchedFact, setFact] = useState('');
	const [imageURL, setURL] = useState('');

	useEffect(() => {
		getCatsFacts().then((fact) => setFact(fact));
	}, []);

	useEffect(() => {
		if (!fetchedFact) return;
		const queryWord = fetchedFact.split(' ')[0];
		fetch(`https://cataas.com/cat/says/${queryWord}`).then((res) => {
			const { url } = res;
			setURL(url);
		});
	}, [fetchedFact]);

	const handleClick = async () => {
		const newFact = await getCatsFacts();
		setFact(newFact);
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
