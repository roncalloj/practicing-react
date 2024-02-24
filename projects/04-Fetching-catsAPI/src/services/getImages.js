const imageURL = 'https://cataas.com/cat/says/';

export const getCatsImages = async (fetchedFact) => {
	if (!fetchedFact) return;
	const queryWord = fetchedFact.split(' ')[0];
	const res = await fetch(`${imageURL}${queryWord}`);
	const { url } = res;
	return url;
};
