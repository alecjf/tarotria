import cards, {
	allCardNames,
	wordClustersRecursive,
	isReversed,
	trimReversed,
} from "./cards.js";
import sortAll from "./sorting";

const getCardsWithWord = (word, spread) =>
	(spread.length === 1 ? allCardNames : spread).filter((card) =>
		cards[card].words.includes(word)
	);

const filterOutReversed = (spread, otherArray) => {
	otherArray = otherArray.map((card) => trimReversed(card));
	return spread.filter(
		(card) => !isReversed(card) && !otherArray.includes(card)
	);
};

const getAllWordsInSpread = (spread) =>
	[...new Set(spread.map((card) => cards[card].words).flat())].sort();

const allWords = getAllWordsInSpread(allCardNames);

const stringifyCards = (friendlyCards, enemyCards) =>
	JSON.stringify([friendlyCards.sort(sortAll), enemyCards.sort(sortAll)]);

const getPrelimMap = (words, spread) => {
	const result = new Map();
	words.forEach((word) => {
		const cluster = wordClustersRecursive(word);
		let { friends, enemies } = cluster,
			friendlyCards = getCardsWithWord(friends[0], spread),
			enemyCards = getCardsWithWord(enemies[0], spread);
		// keeps order of key format consistent!
		if (
			spread.indexOf(friendlyCards[0]) - spread.indexOf(enemyCards[0]) >
			0
		) {
			[friendlyCards, enemyCards] = [enemyCards, friendlyCards];
			[friends, enemies] = [enemies, friends];
		}
		const key = stringifyCards(friendlyCards, enemyCards);
		if (result.has(key)) {
			result.get(key).friends.push(friends);
			result.get(key).enemies.push(enemies);
		} else {
			result.set(key, {
				friends: [friends],
				enemies: [enemies],
			});
		}
	});
	return result;
};

const getSpreadMapsHelper = (map, spread, cardWord) => {
	const result = [...map.entries()]
		.map((keyValue) => {
			const [cardsArrayJSON, friendsEnemiesObject] = keyValue;
			let [friendlyCards, enemyCards] = JSON.parse(cardsArrayJSON),
				{ friends, enemies } = friendsEnemiesObject;
			if (
				friendlyCards.length === 0 ||
				(!cardWord &&
					spread.length === 1 &&
					enemyCards.includes(spread[0]))
			) {
				[friendlyCards, enemyCards] = [enemyCards, friendlyCards];
				[friends, enemies] = [enemies, friends];
			}
			if (cardWord || spread.length === 1) {
				friendlyCards = filterOutReversed(
					friendlyCards,
					cardWord ? [] : [spread[0]]
				);
				!cardWord && (friendlyCards = [spread[0], ...friendlyCards]);
				enemyCards = filterOutReversed(enemyCards, friendlyCards);
			}
			const singleCardWords =
				!cardWord &&
				friendlyCards.length === 1 &&
				enemyCards.length === 0;
			if (!singleCardWords) {
				const friendsEnemiesMap = new Map(
					friends.map((friend, i) => [
						friend.join(", "),
						enemies[i].join(", "),
					])
				);
				return new Map([
					["friendlyCards", friendlyCards],
					["enemyCards", enemyCards],
					["friendsEnemies", friendsEnemiesMap],
				]);
			} else {
				return null;
			}
		})
		.filter((map) => map);
	// add boxes to All Words section:
	!cardWord &&
		spread.forEach((card) => {
			const friendsEnemiesMap = new Map(
				cards[card].words.map((word) => {
					const cluster = wordClustersRecursive(word);
					return [
						cluster.friends.join(", "),
						cluster.enemies.join(", "),
					];
				})
			);
			result.push(
				new Map([
					["friendlyCards", [card]],
					["enemyCards", []],
					["friendsEnemies", friendsEnemiesMap],
				])
			);
		});
	return result;
};

const getSpreadMaps = (spread) =>
	getSpreadMapsHelper(
		getPrelimMap(getAllWordsInSpread(spread), spread),
		spread
	);

const getCardWordMaps = (cardWord) =>
	getSpreadMapsHelper(
		getPrelimMap(
			allWords.filter((word) => word.includes(cardWord)),
			allCardNames
		),
		allCardNames,
		cardWord
	);

const mostCardsSorter = (a, b, spread) => {
	const aCards = a.get("friendlyCards"),
		bCards = b.get("friendlyCards"),
		aOppos = a.get("enemyCards"),
		bOppos = b.get("enemyCards");
	return (
		bCards.length - aCards.length ||
		bOppos.length - aOppos.length ||
		(spread && spread.indexOf(aCards[0]) - spread.indexOf(bCards[0])) ||
		allCardNames.indexOf(aCards[0]) - allCardNames.indexOf(bCards[0])
	);
};

export default getSpreadMaps;
export { getCardWordMaps, mostCardsSorter };
