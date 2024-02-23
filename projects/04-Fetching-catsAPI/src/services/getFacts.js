const random_cat_fact_url = 'https://catfact.ninja/fact';

export const getCatsFacts = async () => {
	const res = await fetch(random_cat_fact_url);
	const data = await res.json();
	const { fact } = data;
	return fact;
};
