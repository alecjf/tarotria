import "../css/find-word.css";
import { useEffect, useState } from "react";
import hebrewWords, { allHebrewWords } from "../data/gematria";

function FindWord({
	words,
	cardWord,
	cardWordLinkHandler,
	makeCardCompare,
	makeHebrewWordBoxes,
}) {
	const [definitions, setDefinitions] = useState(undefined);

	useEffect(() => {
		setDefinitions(getAllMatchingDefinitions(cardWord));
		cardWord && (document.getElementById("word").value = cardWord);
	}, [cardWord]);

	return (
		<div className="find-word">
			<h2>Find Word</h2>
			<form onSubmit={(e) => e.preventDefault()}>
				<input id="word" type="text" />
				<button
					onClick={() =>
						cardWordLinkHandler(
							document.getElementById("word").value
						)
					}
				>
					FIND WORD
				</button>
			</form>
			<div id="results">
				<div id="card-words">
					<h3>Matching Card Words</h3>
					{makeCardCompare({ cardWord })}
				</div>
				<div id="hebrew">
					<div id="hebrew-words">
						<h3>Matching Hebrew Words</h3>
						{makeHebrewWordBoxes(words) || <>NO MATCHING WORDS</>}
					</div>
					<div id="hebrew-definitions">
						<h3>Matching Hebrew Definitions</h3>
						{makeHebrewWordBoxes(definitions) || (
							<>NO MATCHING DEFINITIONS</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

const getAllMatchingDefinitions = (word) =>
	allHebrewWords.filter(
		(hebrew) =>
			hebrewWords[hebrew].definitions.filter((definition) =>
				definition.toLowerCase().includes(word)
			).length > 0
	);

export default FindWord;
export { getAllMatchingDefinitions };
