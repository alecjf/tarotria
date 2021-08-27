import "./App.css";
import { useState } from "react";
import { getRandomSpread } from "./data/cards.js";
import hebrewWords from "./data/gematria";
import CardCompare from "./components/CardCompare";
import FindWord from "./components/FindWord";
import CardWordLink from "./components/CardWordLink";
import HebrewWordBox from "./components/HebrewWordBox";
import LinkedLine from "./components/LinkedLine";
import FindNumber from "./components/FindNumber";
import CardNameLinks from "./components/CardNameLinks";

function App() {
	const [spread, setSpread] = useState(getRandomSpread(1)),
		[cardWord, setCardWord] = useState(undefined),
		[words, setWords] = useState(undefined),
		[numbers, setNumbers] = useState(undefined);

	const makeCardWordLink = (word) => (
		<CardWordLink {...{ word, setCardWord, setWords }} />
	);

	const makeCardNameLinks = (cardNames) => (
		<CardNameLinks {...{ cardNames, setSpread }} />
	);

	const makeCardCompare = ({ spread, cardWord }) => (
		<CardCompare
			{...{ spread, cardWord, makeCardWordLink, makeCardNameLinks }}
		/>
	);

	const makeLinkedLine = (line) => (
		<LinkedLine {...{ line, setCardWord, setWords, setNumbers }} />
	);

	const makeHebrewWordBoxes = (arr) => {
		const result = arr
			?.filter((word) => hebrewWords[word])
			.map((word) => (
				<HebrewWordBox
					{...{ word, makeLinkedLine, key: `${arr}-${word}` }}
				/>
			));
		return result?.length > 0 ? result : null;
	};

	return (
		<div className="App">
			<h1>Tarotria</h1>
			<h3>{spread.join(", ")}</h3>
			{makeCardCompare({ spread })}
			<hr />
			<FindWord
				{...{
					words,
					setWords,
					cardWord,
					setCardWord,
					makeCardCompare,
					makeHebrewWordBoxes,
				}}
			/>
			<hr />
			<FindNumber {...{ numbers, setNumbers, makeHebrewWordBoxes }} />
		</div>
	);
}

export default App;
