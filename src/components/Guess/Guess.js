import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

/* 
Can create another component within same file 
as long as it's used within the same file.
*/
function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : 'cell';

	return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
	const result = checkGuess(value, answer);
	const gameStatus = 'running';

	return (
		<p className="guess">
			{range(5).map((num) => (
				<Cell
					key={num}
					letter={result ? result[num].letter : undefined}
					status={result ? result[num].status : undefined}
				/>
			))}
		</p>
	);
}

export default Guess;
