export const turns = {
	x: '❌',
	o: '⚪',
};

const arrBase = Array.from({ length: 9 }, (_, i) => (i += 0));
let winArr1 = Array.from({ length: 3 }, (v, i) => arrBase.slice(i * 3, (i + 1) * 3));

const winArr2 = [[], []];
for (let i = 0; i < 3; i++) {
	winArr2[winArr2.length] = [];
	for (const COMBOS of winArr1) {
		winArr2[winArr2.length - 1].push(COMBOS[i]);
	}
	winArr2[0].push(winArr1[i][i]);
	let j = i - 2;
	if (j < 0) j *= -1;
	winArr2[1].push(winArr1[i][j]);
}

export const winArr = winArr1.concat(winArr2);
