import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import RenderGuess from '../RenderGuess/RenderGuess';
import Guess from '../Guess/Guess';
import NUM_OF_GUESSES_ALLOWED from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// const answer = 'HELLO';
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState(false);

	// Update guesses array with tempGuessWord
	function handleSubmitGuesses(tempGuessWord) {
		console.log({ tempGuessWord });
		setGuesses([...guesses, tempGuessWord]);
	}

	return (
		<div>
			<RenderGuess guesses={guesses} answer={answer}></RenderGuess>
			<GuessInput handleSubmitGuesses={handleSubmitGuesses} />
		</div>
	);
}

export default Game;
