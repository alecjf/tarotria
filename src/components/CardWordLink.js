import "../css/links.css";
import React from "react";

function CardWordLink({ word, setCardWord, setWords }) {
	return word.split(", ").map((w, i, a) => (
		<React.Fragment key={w}>
			<span
				className="card-word-link"
				onClick={() => {
					setCardWord(w);
					setWords([w]);
				}}
			>
				{w}
			</span>
			{i !== a.length - 1 && <>, </>}
		</React.Fragment>
	));
}

export default CardWordLink;
