import { useEffect, useRef, useState } from 'react';

export function useQuery() {
	const [query, setQuery] = useState('');
	const [errorQuerry, setErrorQuerry] = useState(null);
	const firstInput = useRef(true);

	useEffect(() => {
		if (firstInput.current) {
			firstInput.current = query === '';
			return;
		}
		if (query === '') {
			setErrorQuerry('No movie title to browse');
			return;
		}
		setErrorQuerry(null);
	}, [query]);

	return { query, setQuery, errorQuerry };
}
