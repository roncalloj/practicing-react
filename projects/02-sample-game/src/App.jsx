import confetti from 'canvas-confetti';
import { useState } from 'react';

import { Square } from './components/Square.jsx';
import { WinnerModal } from './components/WinnerModal.jsx';
import { turns } from './constants.js';
import { checkEndGame, checkWinner } from './logic/checks.js';
import { restoreGame, saveGameToStorage } from './logic/storage.js';

function App() {
	const [board, setBoard] = useState(() => {
		const boardFromLocalStorage = window.localStorage.getItem('board');
		if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage);
		return Array(9).fill(null);
	});
	const [turn, setTurn] = useState(() => {
		const turnFromLocalStorage = window.localStorage.getItem('turn');
		return turnFromLocalStorage ?? turns.x;
	});
	const [winner, setWinner] = useState(null);

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(turns.x);
		setWinner(null);
		restoreGame();
	};

	const updateBoard = (index) => {
		if (board[index] || winner) return;
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);
		const newTurn = turn === turns.x ? turns.o : turns.x;
		setTurn(newTurn);
		saveGameToStorage({ board: newBoard, turn: newTurn });
		const newWinner = checkWinner(newBoard);
		if (newWinner && newWinner !== false) {
			confetti();
			setWinner(newWinner);
		}
		if (checkEndGame(newBoard)) setWinner(false);
	};

	return (
		<main className="board">
			<h1>Sample Game</h1>
			<button onClick={resetGame}>Empezar de nuevo</button>
			<section className="game">
				{board.map((square, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{square}
						</Square>
					);
				})}
			</section>
			<section className="turn">
				<Square isSelected={turn === turns.x}>{turns.x}</Square>
				<Square isSelected={turn === turns.o}>{turns.o}</Square>
			</section>
			<WinnerModal resetGame={resetGame} winner={winner} />
		</main>
	);
}

export default App;
