import "../css/links.css";
import React from "react";

function CardNameLinks({ cardNames, cardNameLinkHandler }) {
	return cardNames.map((cardName, i, a) => (
		<React.Fragment key={`${cardNames}-${cardName}`}>
			<span
				className="card-name-link"
				onClick={() => cardNameLinkHandler(cardName)}
			>
				{cardName}
			</span>
			{i !== a.length - 1 && <span className="comma">,&nbsp;</span>}
		</React.Fragment>
	));
}

export default CardNameLinks;
