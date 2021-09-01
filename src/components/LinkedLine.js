import "../css/links.css";
import React from "react";
import { hebrewWordRegExp, negativeHebrewWordRegExp } from "../data/gematria";

function LinkedLine({ line, cardWordLinkHandler, numberLinkHandler }) {
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
		const matches = initialMatches.map((match, i) =>
			match === "-" ? (
				match
			) : (
				<span
					key={`${match}-${i}`}
					className={className}
					onClick={() => handler(match)}
				>
					{match}
				</span>
			)
		);
		const notMatches = line.match(negRegExp) || [];
		let even = line.indexOf(initialMatches[0]) === 0 ? matches : notMatches,
			odd = even === matches ? notMatches : matches;
		// even = even.filter((e) => e !== " ");
		// odd = odd.filter((o) => o !== " ");
		return even.map((e, i) => [e, odd[i]]).flat();
	};

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
			cardWordLinkHandler
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

export default LinkedLine;
