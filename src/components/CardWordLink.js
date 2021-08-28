import "../css/links.css";
import React from "react";

function CardWordLink({ word, cardWordLinkHandler }) {
	return word.split(", ").map((w, i, a) => (
		<React.Fragment key={w}>
			<span
				className="card-word-link"
				onClick={() => cardWordLinkHandler(w)}
			>
				{w}
			</span>
			{i !== a.length - 1 && <>, </>}
		</React.Fragment>
	));
}

export default CardWordLink;
