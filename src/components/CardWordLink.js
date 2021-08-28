import "../css/links.css";
import React from "react";

function CardWordLink({ cardWord, cardWordLinkHandler }) {
	return cardWord.split(", ").map((word, i, a) => (
		<React.Fragment key={word}>
			<span
				className="card-word-link"
				onClick={() => cardWordLinkHandler(word)}
			>
				{word}
			</span>
			{i !== a.length - 1 && <>, </>}
		</React.Fragment>
	));
}

export default CardWordLink;
