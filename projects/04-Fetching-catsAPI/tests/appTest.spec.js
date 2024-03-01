// @ts-check
import { expect, test } from '@playwright/test';
const LOCALHOST_URL = 'http://localhost:5173';
const imageURL = 'https://cataas.com/cat/says/';

test('random fact and related image app', async ({ page }) => {
	await page.goto(LOCALHOST_URL);
	const randomFactTag = await page.getByRole('paragraph');
	const relatedImageTag = await page.getByRole('img');

	const randomFact = await randomFactTag.textContent();
	const imageSRC = await relatedImageTag.getAttribute('src');

	//await expect(randomFact).not.toBeNull();
	//await expect(imageSRC).not.toBeNull();
	await expect(randomFact?.length).toBeGreaterThan(0);
	await expect(imageSRC?.startsWith(imageURL)).toBeTruthy();
});
