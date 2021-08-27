import "../css/links.css";
import React from "react";
import { hebrewWordRegExp, negativeHebrewWordRegExp } from "../data/gematria";
import { getAllMatchingWords } from "./FindWord";

function LinkedLine({ line, setCardWord, setWords, setNumbers }) {
	const highlightLineHelper = (
		line,
		posRegExp,
		negRegExp,
		className,
		handler
	) => {
		!isNaN(line) && (line += "");
		const initialMatches = line.match(posRegExp);
		if (!initialMatches) return [line];
		const matches = initialMatches.map((match, i) => (
			<React.Fragment key={`${match}-${i}`}>
				<span className={className} onClick={() => handler(match)}>
					{match}
				</span>
			</React.Fragment>
		));
		const notMatches = line.match(negRegExp) || [];
		let even = line.indexOf(initialMatches[0]) === 0 ? matches : notMatches,
			odd = even === matches ? notMatches : matches;
		even = even.filter((e) => e !== " ");
		odd = odd.filter((o) => o !== " ");
		return even.map((e, i) => (
			<React.Fragment key={`${e}-${i}`}>
				{[removeRLM(e), removeRLM(odd[i])]}
			</React.Fragment>
		));
	};

	const hebrewWordLinkHandler = (word) => {
			const updated = removeRLM(word).trim();
			setCardWord(updated);
			setWords(getAllMatchingWords(updated));
		},
		numberLinkHandler = (number) => setNumbers([+number]);

	const highlightNumbersInLine = (line) =>
		highlightLineHelper(
			line,
			/[0-9]+/g,
			/[^0-9]+/g,
			"number",
			numberLinkHandler
		);

	const highlightHebrewWordsInLine = (line) =>
		highlightLineHelper(
			line,
			hebrewWordRegExp,
			negativeHebrewWordRegExp,
			"hebrew-word",
			hebrewWordLinkHandler
		);

	const highlightAll = (line) =>
		highlightHebrewWordsInLine(line).map((section, i) => (
			<React.Fragment key={`section-${i}`}>
				{typeof section === "string"
					? highlightNumbersInLine(section)
					: section}
			</React.Fragment>
		));

	return highlightAll(line);
}

const rlm = String.fromCharCode(8207);

const removeRLM = (word) =>
	typeof word === "string" ? word.replace(new RegExp(rlm, "g"), "") : word;

export default LinkedLine;
export { rlm, removeRLM };
