import { winArr } from '../constants.js';

export const checkWinner = (checkBoard) => {
	for (const combo of winArr) {
		const [a, b, c] = combo;
		if (checkBoard[a] && checkBoard[a] === checkBoard[b] && checkBoard[a] === checkBoard[c]) {
			return checkBoard[a];
		}
	}
	return null;
};

export const checkEndGame = (checkBoard) => {
	return checkBoard.every((square) => square !== null);
};
