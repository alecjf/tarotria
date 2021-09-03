import "./App.css";
import "./css/links.css";
import { useEffect, useState, useRef } from "react";
import { allCardNames, getRandomSpread } from "./data/cards.js";
import hebrewWords, { allHebrewWords } from "./data/gematria";
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
		[cardWord, setCardWord] = useState(["love"]),
		[words, setWords] = useState(undefined),
		[numbers, setNumbers] = useState([1]),
		scrollRef = useRef(undefined);

	useEffect(() => scrollRef.current?.scrollIntoView({ behavior: "smooth" }));

	useEffect(() => (document.getElementById("size").value = size), [size]);

	useEffect(
		() => (document.getElementById("cards").value = spread[0]),
		[spread]
	);

	const sizeDropdownHandler = (e) => {
		setSize(e.target.value);
		setSpread(getRandomSpread(e.target.value));
		scrollRef.current = document.getElementById("spread-cards-container");
	};

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

	const cardWordLinkHandler = (cardWord) => {
		const val = cardWord.trim().toLowerCase();
		if (val.length >= 2) {
			setCardWord(val);
			setWords(getAllMatchingWords(val));
			scrollRef.current = document.getElementById("find-word-container");
		}
	};

	const makeCardWordLink = (cardWord) => (
		<CardWordLink {...{ cardWord, cardWordLinkHandler }} />
	);

	const cardNameLinkHandler = (cardName) => {
		setSize(1);
		setSpread([cardName]);
		scrollRef.current = document.getElementById("spread-cards-container");
	};

	const makeCardNameLinks = (cardNames) => (
		<CardNameLinks {...{ cardNames, cardNameLinkHandler }} />
	);

	const makeCardCompare = ({ spread, cardWord }) => (
		<CardCompare
			{...{ spread, cardWord, makeCardWordLink, makeCardNameLinks }}
		/>
	);

	const numberLinkHandler = (number) => {
		setNumbers([+number]);
		scrollRef.current = document.getElementById("find-number-container");
	};

	const makeLinkedLine = (line) => (
		<LinkedLine {...{ line, cardWordLinkHandler, numberLinkHandler }} />
	);

	const makeHebrewWordBoxes = (words) => {
		const result = words
			?.filter((word) => hebrewWords[word])
			.map((word) => (
				<HebrewWordBox
					{...{ word, makeLinkedLine, key: `${words}-${word}` }}
				/>
			));
		return result?.length > 0 ? result : null;
	};

	return (
		<div className="App">
			<h1>Tarotria</h1>
			Spread Size: {getSizeDropdown(10)}
			<h3 id="spread-cards-container">
				<ul id="spread-cards">
					{spread.map((card) => (
						<li
							key={`spread-card-${card}`}
							className="card-name-link"
							onClick={() => cardNameLinkHandler(card)}
						>
							{card}
						</li>
					))}
				</ul>
			</h3>
			Cards: {getCardsDropdown()}
			{makeCardCompare({ spread })}
			<hr />
			<div id="find-word-container">
				<FindWord
					{...{
						words,
						cardWord,
						cardWordLinkHandler,
						makeCardCompare,
						makeHebrewWordBoxes,
					}}
				/>
			</div>
			<hr />
			<div id="find-number-container">
				<FindNumber {...{ numbers, setNumbers, makeHebrewWordBoxes }} />
			</div>
		</div>
	);
}

const getAllMatchingWords = (word) =>
	allHebrewWords.filter(
		(hebrew) =>
			hebrew.includes(word) || hebrewWords[hebrew].final?.includes(word)
	);

export default App;
export { getAllMatchingWords };
