import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import RenderGuess from '../RenderGuess/RenderGuess';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	// running | won | lost
	const [gameStatus, setGameStatus] = React.useState('running');

	// Update guesses array with tempGuessWord
	function handleSubmitGuesses(tempGuessWord) {
		/*
		React setter function doesn't immediately take effect
		they schedule the update for the next render. 
		
		Ex: guesses.length === 5 

		At this point, the if statement runs but guesses.length 
		is still 5 until Game component is rendered. Once Game 
		component is rendered then

		guesses.length === 6
	 
		The way to fix is to pluck out a variable
		*/
		const nextGuesses = [...guesses, tempGuessWord];
		// console.log({ tempGuessWord });
		setGuesses(nextGuesses);

		if (tempGuessWord.toUpperCase() === answer) {
			setGameStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

	return (
		<div>
			{gameStatus}
			<RenderGuess guesses={guesses} answer={answer}></RenderGuess>
			<GuessInput
				handleSubmitGuesses={handleSubmitGuesses}
				gameStatus={gameStatus}
			/>
			{gameStatus === 'won' && (
				<WonBanner numOfGuesses={guesses.length} />
			)}
			{gameStatus === 'lost' && <LostBanner answer={answer} />}
		</div>
	);
}

export default Game;
