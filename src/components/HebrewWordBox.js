import hebrewWords from "../data/gematria";

function HebrewWordBox({ word, makeLinkedLine }) {
	return (
		<table className="hebrew-word-box">
			<thead>
				<tr>
					<th>{makeLinkedLine(hebrewWords[word].value)}</th>
					<th>{makeLinkedLine(word)}</th>
					{hebrewWords[word].final && (
						<>
							<th>
								{makeLinkedLine(hebrewWords[word].finalValue)}
							</th>
							<th>{makeLinkedLine(hebrewWords[word].final)}</th>
						</>
					)}
				</tr>
			</thead>
			<tbody>
				{hebrewWords[word].definitions.map((definition) => (
					<tr key={`${word}-${definition}`}>
						<td colSpan={hebrewWords[word].final ? 4 : 2}>
							{makeLinkedLine(definition)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default HebrewWordBox;
