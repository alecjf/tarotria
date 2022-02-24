import { useEffect } from "react";
import hebrewWords, { allHebrewWords, values } from "../data/gematria";

function FindNumber({ numbers, setNumbers, makeHebrewWordBoxes }) {
	const findNumberHandler = () => {
		const val = document.getElementById("number").value;
		setNumbers([+val]);
	};

	useEffect(
		() => numbers && (document.getElementById("number").value = numbers[0]),
		[numbers]
	);

	return (
		<div id="find-number">
			<h2>Find Numbers</h2>
			<form onSubmit={(e) => e.preventDefault()}>
				<input id="number" type="number" />
				&nbsp;
				<button onClick={findNumberHandler}>FIND NUMBER</button>
			</form>
			{numbers.filter((number) => values[number]).length > 0 ? (
				<>
					<h3>{numbers.join(", ")}</h3>
					{numbers
						.filter((number) => values[number])
						.map((number) =>
							makeHebrewWordBoxes(
								values[number].words.map((word) =>
									getHebrewWordKey(word)
								)
							)
						)}
				</>
			) : (
				<>
					<br />
					NO MATCHING NUMBERS
				</>
			)}
		</div>
	);
}

// in case word is in final form:
const getHebrewWordKey = (word) =>
	allHebrewWords.filter(
		(hebrew) => hebrew === word || hebrewWords[hebrew].final === word
	)[0];

export default FindNumber;
