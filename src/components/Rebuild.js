import hebrewWords /*, { values }*/ from "../data/gematria";

function Rebuild() {
	const hebrewWordRegExp = new RegExp(
		/([-\s]*[\u0590-\u05FF\uFB1D-\uFB4F]+[-\s]*)+/,
		"g"
	);

	const negativeHebrewWordRegExp = new RegExp(
		/([^-\u0590-\u05FF\uFB1D-\uFB4F]+[-]*)+/,
		"g"
	);

	const lrm = String.fromCharCode(8206),
		rlm = String.fromCharCode(8207);

	const noDir = (string) => string.replaceAll(rlm, "").replaceAll(lrm, "");

	const fixDefinition = (definition) => {
		const initialHebrew = definition.match(hebrewWordRegExp);
		if (!initialHebrew) return lrm + noDir(definition) + lrm;
		const hebrew = initialHebrew.map((word) => rlm + noDir(word) + rlm),
			notHebrew =
				definition
					.match(negativeHebrewWordRegExp)
					?.map((not) => noDir(not).trim())
					.filter((not) => not.length)
					.map((not) => lrm + not + lrm) || [],
			even =
				definition.indexOf(initialHebrew[0]) === 0 ? hebrew : notHebrew,
			odd = even === hebrew ? notHebrew : hebrew;
		const newDef = even
			.map((e, i) => [e, odd[i]])
			.flat()
			.filter((item) => item)
			.join("");
		return lrm + newDef + lrm;
	};

	const result = {};

	Object.keys(hebrewWords).forEach((word) => {
		const add = {
			...hebrewWords[word],
			definitions: hebrewWords[word].definitions.map((definition) =>
				fixDefinition(definition)
			),
		};
		add.final && (add.final = noDir(add.final));
		result[noDir(word)] = add;
	});

	/*
    const key1 = Object.keys(result)[0],
	def =
		"‎‎‎‎‎‎‎‎‎‎‎‎‎‎Aleph. (In spelling, interchanges with:‎‏ה ‏‎,‎‏ו ‏‎,‎‏י ‏‎,‎‏ז ‏‎;‎‏ט ‏‎,‎‏ח ‏‎,‎‏ע ‏‎,‎‏כ ‏‎,‎‏ס ‏‎,‎‏צ ‏‎,‎‏ק ‏‎,‎‏ת ‏‎) (Aleph =‎‏ אלף ‏‎— 111/831;‎‏ אלוף ‏‎— 117/837 — Ox) (The value of 111 is significant in QBL tradition).‎‎‎‎‎‎‎‎‎‎‎‎‎‎";

	console.log(getFirstDef(key2), showGuts(getFirstDef(result, key2)));

    const vals = { ...values };
	Object.keys(vals).forEach((key) =>
		vals[key].words
			? (vals[key].words = vals[key].words.map((word) => noDir(word)))
			: delete vals[key]
	);

	console.log(
		`const values = ${JSON.stringify(
			vals
		)};\n\nconst hebrewWords = ${JSON.stringify(result)};`
	);
    */

	return <></>;
}

const showGuts = (line) =>
		[...line].map((char) => {
			const code = char.charCodeAt(0);
			return code === 8206 || code === 8207 ? code : char;
		}),
	getFirstDef = (obj, key) => obj[key].definitions[0],
	key2 = "חנ";

export default Rebuild;
export { showGuts, getFirstDef, key2 };
