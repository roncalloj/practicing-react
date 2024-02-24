import { useEffect, useState } from 'react';
import { getCatsFacts } from '../services/getFacts';

export function useRandomFact() {
	const [fetchedFact, setFact] = useState('');
	const newCatFact = () => {
		getCatsFacts().then((fact) => setFact(fact));
	};
	useEffect(newCatFact, []);
	return { fetchedFact, newCatFact };
}
