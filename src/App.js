import "./css/variables.css";
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
import fhLogo from "./images/fern-haus-site-logo.png";

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

	const sizeDropdownHandler = (size) => {
		setSize(size);
		setSpread(getRandomSpread(size));
		scrollRef.current = document.getElementById("spread-cards-container");
	};

	const getSizeDropdown = (size) => (
		<>
			<select id="size">
				{new Array(size).fill(0).map((dummy, i) => (
					<option key={`size-option-${i + 1}`}>{i + 1}</option>
				))}
			</select>
			&nbsp;
			<button
				onClick={() =>
					sizeDropdownHandler(+document.getElementById("size").value)
				}
			>
				DRAW
			</button>
		</>
	);

	const cardsDropdownHandler = (card) => setSpread([card]);

	const getCardsDropdown = () => (
		<>
			<select id="cards">
				{allCardNames.map((cardName) => (
					<option key={`cards-option-${cardName}`}>{cardName}</option>
				))}
			</select>
			&nbsp;
			<button
				onClick={() =>
					cardsDropdownHandler(document.getElementById("cards").value)
				}
			>
				DRAW
			</button>
		</>
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
			<header>
				<a
					href="https://fern.haus/"
					className="fern-haus-link"
					target="_blank"
					rel="noreferrer"
				>
					<section className="fern-haus-info">
						<img
							src={fhLogo}
							alt="Fern Haus Logo - House with Port Window and Fern Vines"
						/>
						<h4>fern.haus</h4>
					</section>
				</a>
				<h1>Tarotria</h1>
				<h2>Tarot and Gematria Combined</h2>
				<div id="sub-header">
					<h3>
						Give your Tarot readings deeper meaning. Here you can
						look up Gematria references for each word in your
						spread.
					</h3>
					<h3>
						Gematria is a complex esoteric practice within Kabbalah,
						or Jewish Mysticism. It assigns a numeric value to each
						Biblical Hebrew word based on the word's constituent
						letters. Gematria is a great way to introduce both
						Kabbalah and numerology into your Tarot practice.
					</h3>
					<p>
						The Gematria dictionary is parsed from{" "}
						<a
							href="http://www.billheidrick.com/works/hgemat.htm"
							target="_blank"
							rel="noreferrer"
						>
							Bill Heidrick's Gematria Website
						</a>
						. For a deeper dive into tarot, check out{" "}
						<a
							href="https://fern.haus/projects/tarot"
							target="_blank"
							rel="noreferrer"
						>
							Fern Haus Tarot
						</a>
						.
					</p>
				</div>
			</header>
			<h3>Spread Size: {getSizeDropdown(10)}</h3>
			<div id="spread-cards-container">
				<div id="spread-cards">
					{spread.map((card) => (
						<div
							key={`spread-card-${card}`}
							className="card-name-link"
							onClick={() => cardNameLinkHandler(card)}
						>
							<img
								src={`https://fern.haus/images/tarot/${card.replace(
									" reversed",
									""
								)}.jpg`}
								alt={card}
								className={
									card.includes(" reversed")
										? "reversed"
										: "upright"
								}
							/>
							{card}
						</div>
					))}
				</div>
			</div>
			<h3>Pick Single Card: {getCardsDropdown()}</h3>
			<br />
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
			<footer>
				<a
					href="https://fern.haus/"
					className="fern-haus-link"
					target="_blank"
					rel="noreferrer"
				>
					<section className="fern-haus-info">
						<img
							src={fhLogo}
							alt="Fern Haus Logo - House with Port Window and Fern Vines"
						/>
						<h4>fern.haus</h4>
					</section>
				</a>
			</footer>
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
