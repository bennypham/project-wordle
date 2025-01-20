import React from 'react';

function InputForm() {
	const [guessWord, setGuessWord] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ guessWord });
		setGuessWord('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guessWord}
				required
				minLength={5}
				maxLength={5}
				onChange={(event) => {
					const convertGuessWord = event.target.value.toUpperCase();
					setGuessWord(convertGuessWord);
				}}
			/>
		</form>
	);
}

export default InputForm;
