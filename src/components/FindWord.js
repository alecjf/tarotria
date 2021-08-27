import "../css/find-word.css";
import { useEffect, useState } from "react";
import hebrewWords, { allHebrewWords } from "../data/gematria";
import { removeRLM } from "./LinkedLine";

function FindWord({
	words,
	setWords,
	cardWord,
	setCardWord,
	makeCardCompare,
	makeHebrewWordBoxes,
}) {
	const [definitions, setDefinitions] = useState(undefined);

	useEffect(() => {
		setDefinitions(getAllMatchingDefinitions(cardWord));
		cardWord && (document.getElementById("word").value = cardWord);
	}, [cardWord]);

	const findWordHandler = () => {
		const val = removeRLM(document.getElementById("word").value)
			.trim()
			.toLowerCase();
		if (val.length >= 2) {
			setCardWord(val);
			setWords(getAllMatchingWords(val));
		}
	};

	return (
		<div className="find-word">
			<h2>Find Word</h2>
			<input id="word" type="text" />
			<button onClick={findWordHandler}>FIND WORD</button>
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

const getAllMatchingWords = (word) =>
	allHebrewWords.filter(
		(hebrew) =>
			hebrew.includes(word) || hebrewWords[hebrew].final?.includes(word)
	);

const getAllMatchingDefinitions = (word) =>
	allHebrewWords.filter(
		(hebrew) =>
			hebrewWords[hebrew].definitions.filter((definition) =>
				definition.includes(word)
			).length > 0
	);

export default FindWord;
export { getAllMatchingWords, getAllMatchingDefinitions };
