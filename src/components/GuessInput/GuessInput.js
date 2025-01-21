import React from 'react';

function InputForm({ handleSubmitGuesses }) {
	const [tempGuessWord, setTempGuessWord] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		handleSubmitGuesses(tempGuessWord);
		setTempGuessWord('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={tempGuessWord}
				required
				pattern="[A-Za-z]{5}"
				title="5 letter word only"
				onChange={(event) => {
					const convertGuessWord = event.target.value.toUpperCase();
					setTempGuessWord(convertGuessWord);
				}}
			/>
		</form>
	);
}

export default InputForm;
