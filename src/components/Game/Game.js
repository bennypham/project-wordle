import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import RenderGuess from '../RenderGuess/RenderGuess';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
const answer = 'hello';
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	// Update guesses array with tempGuessWord
	function handleSubmitGuesses(tempGuessWord) {
		console.log({ tempGuessWord });
		setGuesses([...guesses, tempGuessWord]);
	}

	return (
		<div>
			<RenderGuess guesses={guesses}></RenderGuess>
			<GuessInput handleSubmitGuesses={handleSubmitGuesses} />
		</div>
	);
}

export default Game;
