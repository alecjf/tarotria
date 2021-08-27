import "../css/links.css";
import React from "react";

function CardNameLinks({ cardNames, setSpread }) {
	return cardNames.map((cardName, i, a) => (
		<React.Fragment key={`${cardNames}-${cardName}`}>
			<span
				className="card-name-link"
				onClick={() => setSpread([cardName])}
			>
				{cardName}
			</span>
			{i !== a.length - 1 && <>, </>}
		</React.Fragment>
	));
}

export default CardNameLinks;
