import "./App.css";
import { useEffect, useState } from "react";
import { allCardNames, getRandomSpread } from "./data/cards.js";
import hebrewWords from "./data/gematria";
import CardCompare from "./components/CardCompare";
import FindWord from "./components/FindWord";
import CardWordLink from "./components/CardWordLink";
import HebrewWordBox from "./components/HebrewWordBox";
import LinkedLine from "./components/LinkedLine";
import FindNumber from "./components/FindNumber";
import CardNameLinks from "./components/CardNameLinks";

function App() {
	const [size, setSize] = useState(3),
		[spread, setSpread] = useState(getRandomSpread(size)),
		[cardWord, setCardWord] = useState(undefined),
		[words, setWords] = useState(undefined),
		[numbers, setNumbers] = useState(undefined);

	useEffect(() => setSpread(getRandomSpread(size)), [size]);

	const sizeDropdownHandler = (e) => setSize(e.target.value);

	const getSizeDropdown = (size) => (
		<select id="size" onChange={(е) => sizeDropdownHandler(е)}>
			{new Array(size).fill(0).map((dummy, i) => (
				<option key={`size-option-${i + 1}`}>{i + 1}</option>
			))}
		</select>
	);

	const cardsDropdownHandler = (e) => setSpread([e.target.value]);

	const getCardsDropdown = () => (
		<select id="cards" onChange={(е) => cardsDropdownHandler(е)}>
			{allCardNames.map((cardName) => (
				<option key={`cards-option-${cardName}`}>{cardName}</option>
			))}
		</select>
	);

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
			Spread Size: {getSizeDropdown(10)}
			<h3>{spread.join(", ")}</h3>
			Cards: {getCardsDropdown()}
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
