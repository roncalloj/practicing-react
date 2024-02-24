import { useEffect, useState } from 'react';
import { getCatsImages } from '../services/getImages';

export function useImages({ fetchedFact }) {
	const [imageURL, setURL] = useState('');
	useEffect(() => {
		getCatsImages(fetchedFact).then((url) => setURL(url));
	}, [fetchedFact]);
	return { imageURL };
}
