import React from "react";
import getSpreadMaps, {
	getCardWordMaps,
	mostCardsSorter,
} from "../data/card-compare.js";

function CardCompare({
	spread,
	cardWord,
	makeCardWordLink,
	makeCardNameLinks,
}) {
	const spreadMaps = cardWord
			? getCardWordMaps(cardWord)
			: spread
			? getSpreadMaps(spread)
			: [],
		multiCardSpread = !cardWord && spread?.length > 1;

	let allWordsHrPlaced = false;

	return spreadMaps.length > 0 ? (
		<div className="card-compare">
			{spreadMaps
				.sort((a, b) => mostCardsSorter(a, b, spread))
				.map((map, i) => {
					const friendlyCards = map.get("friendlyCards"),
						enemyCards = map.get("enemyCards"),
						friendsEnemies = map.get("friendsEnemies"),
						hasNoOpposites = enemyCards.length === 0,
						allWordsReached =
							friendlyCards.length === 1 && hasNoOpposites;
					return (
						<React.Fragment key={`card-compare-table-${i}`}>
							{!cardWord && allWordsReached && !allWordsHrPlaced && (
								<>
									<hr />
									<h3>All Words</h3>
								</>
							)}
							{allWordsReached && (allWordsHrPlaced = true)}
							<table className="card-compare-table">
								<thead>
									<tr>
										<th colSpan={hasNoOpposites ? 2 : 1}>
											{makeCardNameLinks(friendlyCards)}
										</th>
										{!hasNoOpposites && (
											<th>
												{makeCardNameLinks(enemyCards)}
											</th>
										)}
									</tr>
								</thead>
								<tbody>
									{[...friendsEnemies.entries()].map(
										(keyValue) => {
											const [friend, enemy] = keyValue;
											return (
												<tr
													key={`${friendlyCards}-${enemyCards}-${friend}-${enemy}`}
												>
													<td
														colSpan={
															!(
																multiCardSpread &&
																allWordsReached
															)
																? 2
																: 1
														}
													>
														{makeCardWordLink(
															friend
														)}
													</td>
													{!(
														multiCardSpread &&
														allWordsReached
													) && (
														<td>
															{makeCardWordLink(
																enemy
															)}
														</td>
													)}
												</tr>
											);
										}
									)}
								</tbody>
							</table>
						</React.Fragment>
					);
				})
				.flat()}
		</div>
	) : (
		<>NO MATCHING WORDS</>
	);
}

export default CardCompare;
