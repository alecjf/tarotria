import { useEffect } from "react";
import hebrewWords, { allHebrewWords, values } from "../data/gematria";

function FindNumber({ numbers, setNumbers, makeHebrewWordBoxes }) {
	const findNumberHandler = () => {
		const val = document.getElementById("number").value;
		setNumbers([+val]);
	};

	useEffect(
		() => (document.getElementById("number").value = numbers[0]),
		[numbers]
	);

	return (
		<div id="find-number">
			<h2>Find Numbers</h2>
			<input id="number" type="number" />
			<button onClick={findNumberHandler}>FIND NUMBER</button>
			<br />
			<br />
			{numbers ? (
				<>
					<h4>{numbers.join(", ")}</h4>
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
				<>NO MATCHING NUMBERS</>
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
