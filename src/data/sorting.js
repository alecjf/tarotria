import cards, { allCardNames, trimReversed } from "./cards";

const suits = ["Wands", "Cups", "Swords", "Pentacles"],
	courts = ["Page", "Knight", "Queen", "King"],
	getIndex = (item, arr) => {
		for (let i = 0; i < arr.length; i++) {
			if (item.includes(arr[i])) {
				return i;
			}
		}
		return null;
	},
	sort = (a, b, arr) => getIndex(a, arr) - getIndex(b, arr),
	sortSuits = (a, b) => sort(a, b, suits),
	sortCourts = (a, b) => sort(a, b, courts),
	getRank = (card) =>
		card !== "Wheel of Fortune" && card.substring(0, card.indexOf(" of ")),
	sortRanks = (a, b, rankA, rankB) => {
		rankA = rankA ?? getRank(a);
		rankB = rankB ?? getRank(b);
		if (a.includes("Ace") || b.includes("Ace")) {
			if (a.includes("Ace") && b.includes("Ace")) {
				return sortSuits(a, b);
			} else if (a.includes("Ace")) {
				return -1;
			} else if (b.includes("Ace")) {
				return 1;
			}
		} else if (!isNaN(+rankA) || !isNaN(+rankB)) {
			if (rankA === rankB) {
				return sortSuits(a, b);
			} else if (!isNaN(+rankA) && !isNaN(+rankB)) {
				return +rankA - +rankB;
			} else if (!isNaN(+rankA)) {
				return -1;
			} else if (!isNaN(+rankB)) {
				return 1;
			}
		} else {
			return sortCourts(a, b);
		}
	},
	sortAll = (a, b) => {
		// + 1 to avoid falsy "0" value for Fool:
		const aMajor = cards[trimReversed(a)].major + 1,
			bMajor = cards[trimReversed(b)].major + 1,
			rankA = getRank(a),
			rankB = getRank(b);
		if (aMajor || bMajor) {
			if (aMajor && bMajor) {
				return aMajor - bMajor;
			} else if (aMajor) {
				return -1;
			} else if (bMajor) {
				return 1;
			}
			// work from smaller to larger groupings:
			// get the suits sorted within the rank,
			// THEN sort the ranks:
		} else if (rankA === rankB) {
			return sortSuits(a, b);
		} else if (rankA !== rankB) {
			return sortRanks(a, b, rankA, rankB);
		}
	};

const sortedCardNames = allCardNames.sort(sortAll);

export default sortAll;
export { suits, courts, sortedCardNames };
