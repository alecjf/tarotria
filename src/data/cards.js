const opposites = [
	["yin", "yang"],
	["active", "passive"],
	["active", "yin"],
	["passive", "yang"],
	["arrival", "departure"],
	["attack", "defense"],
	["balance", "chaos"],
	["beginning", "ending"],
	["bravery", "fear"],
	["chaos", "serenity"],
	["cold", "warm"],
	["conscious mind", "unconscious mind"],
	["control", "loss of control"],
	["decision", "indecision"],
	["drama", "peace"],
	["dream", "nightmare"],
	["enlightenment", "ignorance"],
	["expansion", "restriction"],
	["experience", "inexperience"],
	["failure", "success"],
	["faith", "loss of faith"],
	["gain", "loss"],
	["generosity", "selfishness"],
	["hope", "hopelessness"],
	["irrationality", "rationality"],
	["irresponsibility", "responsibility"],
	["joy", "dissatisfaction"],
	["joy", "sadness"],
	["justice", "unfairness"],
	["fairness", "unfairness"],
	["laziness", "work"],
	["masculinity", "femininity"],
	["maternal", "paternal"],
	["negative", "positive"],
	["physical conquest", "nonphysical conquest"],
	["optimism", "pessimism"],
	["pain", "pleasure"],
	["sleep", "sleeplessness"],
	["solitude", "relationship"],
	["strength", "weakness"],
	["struggle", "serenity"],
	["thrift", "waste"],
	["victory", "defeat"],
	["peace", "chaos"],
	["peace", "struggle"],
	["belief", "loss of faith"],
	["happiness", "sadness"],
	["dissatisfaction", "satisfaction"],
	["patience", "impatience"],
];

const cards = {
	Fool: {
		assoc: { elements: ["Air"] },
		major: 0,
		words: [
			"beginning",
			"carelessness",
			"ignorance",
			"inexperience",
			"innocence",
			"new choice",
			"potential",
			"spontaneity",
		],
	},
	Magician: {
		assoc: { celestial: ["Mercury"] },
		major: 1,
		words: [
			"ability",
			"action",
			"active",
			"concentration",
			"confidence",
			"conscious mind",
			"control",
			"power",
			"skill",
			"talent",
			"yang",
		],
	},
	"High Priestess": {
		assoc: { celestial: ["Moon"] },
		major: 2,
		words: [
			"intuition",
			"meditation",
			"mystery",
			"passive",
			"potential",
			"secret",
			"spiritual connection",
			"unconscious mind",
			"yin",
		],
	},
	Empress: {
		assoc: { celestial: ["Venus"] },
		major: 3,
		words: [
			"abundance",
			"beauty",
			"creativity",
			"desire",
			"femininity",
			"material world",
			"maternal",
			"nature",
			"pleasure",
			"protection",
		],
	},
	Emperor: {
		assoc: {},
		dates: ["2020-03-21T07:00:00.000Z", "2020-04-20T07:00:00.000Z"],
		major: 4,
		words: [
			"authority",
			"experience",
			"hierarchy",
			"masculinity",
			"paternal",
			"power",
			"rationality",
			"regulation",
			"responsibility",
			"rule",
			"structure",
		],
	},
	Hierophant: {
		assoc: {},
		dates: ["2020-04-21T07:00:00.000Z", "2020-05-20T07:00:00.000Z"],
		major: 5,
		words: [
			"belief",
			"conformity",
			"education",
			"faith",
			"group",
			"guidance",
			"hierarchy",
			"initiation",
			"institution",
			"ritual",
			"spiritual connection",
			"tradition",
		],
	},
	Lovers: {
		assoc: {},
		dates: ["2020-05-21T07:00:00.000Z", "2020-06-20T07:00:00.000Z"],
		major: 6,
		words: [
			"choice",
			"desire",
			"harmony",
			"intimacy",
			"love",
			"passion",
			"pleasure",
			"relationship",
			"self-confidence",
			"sex",
			"union",
		],
	},
	Chariot: {
		assoc: {},
		dates: ["2020-06-21T07:00:00.000Z", "2020-07-21T07:00:00.000Z"],
		major: 7,
		words: [
			"assertion",
			"bravery",
			"control",
			"determination",
			"emotional discipline",
			"movement",
			"physical conquest",
			"traveling",
			"victory",
			"willpower",
		],
	},
	Strength: {
		assoc: {},
		dates: ["2020-07-22T07:00:00.000Z", "2020-08-22T07:00:00.000Z"],
		major: 8,
		words: [
			"bravery",
			"composure",
			"confidence",
			"courage",
			"determination",
			"endurance",
			"energy",
			"fortitude of character",
			"health",
			"nonphysical conquest",
			"patience",
			"strength",
		],
	},
	Hermit: {
		assoc: {},
		dates: ["2020-08-23T07:00:00.000Z", "2020-09-22T07:00:00.000Z"],
		major: 9,
		words: [
			"contemplation",
			"enlightenment",
			"guidance",
			"introspection",
			"meditation",
			"searching",
			"self-sufficiency",
			"solitude",
		],
	},
	"Wheel of Fortune": {
		assoc: { celestial: ["Jupiter"] },
		major: 10,
		words: [
			"cycle",
			"destiny",
			"luck",
			"movement",
			"potential",
			"turning point",
			"unstoppable change",
			"vision",
		],
	},
	Justice: {
		assoc: {},
		dates: ["2020-09-23T07:00:00.000Z", "2020-10-22T07:00:00.000Z"],
		major: 11,
		words: [
			"balance",
			"cause-and-effect",
			"decision",
			"fairness",
			"justice",
			"rationality",
			"responsibility",
			"rule",
			"truth",
		],
	},
	"Hanged Man": {
		assoc: { elements: ["Water"] },
		major: 12,
		words: [
			"acceptance",
			"altered perspective",
			"meditation",
			"punishment",
			"release",
			"restriction",
			"sacrifice",
			"suspense",
			"upside-down",
			"waiting",
		],
	},
	Death: {
		assoc: {},
		dates: ["2020-10-23T07:00:00.000Z", "2020-11-22T08:00:00.000Z"],
		major: 13,
		words: [
			"dramatic transformation",
			"elimination",
			"ending",
			"lifestyle change",
			"loss",
			"release",
			"transition",
			"turning point",
			"unstoppable change",
		],
	},
	Temperance: {
		assoc: {},
		dates: ["2020-11-23T08:00:00.000Z", "2020-12-21T08:00:00.000Z"],
		major: 14,
		words: [
			"adaptation",
			"balance",
			"combination",
			"compromise",
			"cooperation",
			"health",
			"moderation",
			"patience",
		],
	},
	Devil: {
		assoc: {},
		dates: ["2019-12-22T08:00:00.000Z", "2020-01-19T08:00:00.000Z"],
		major: 15,
		words: [
			"bondage",
			"deception",
			"hedonism",
			"hopelessness",
			"ignorance",
			"loss of control",
			"loss of faith",
			"materialism",
			"selfishness",
			"temptation",
			"weakness",
		],
	},
	Tower: {
		assoc: { celestial: ["Mars"] },
		major: 16,
		words: [
			"chaos",
			"disaster",
			"humbling experience",
			"punishment",
			"release",
			"revelation",
			"separation",
			"sudden change",
			"upheaval",
		],
	},
	Star: {
		assoc: {},
		dates: ["2020-01-20T08:00:00.000Z", "2020-02-18T08:00:00.000Z"],
		major: 17,
		words: [
			"beauty",
			"faith",
			"generosity",
			"guidance",
			"hope",
			"illumination",
			"inspiration",
			"peace",
			"renewal",
			"serenity",
		],
	},
	Moon: {
		assoc: {},
		dates: ["2020-02-19T08:00:00.000Z", "2020-03-20T07:00:00.000Z"],
		major: 18,
		words: [
			"confusion",
			"deception",
			"dream",
			"fear",
			"illusion",
			"imagination",
			"magnetism",
			"strangeness",
			"unconscious mind",
		],
	},
	Sun: {
		assoc: { celestial: ["Sun"] },
		major: 19,
		words: [
			"assurance",
			"bliss",
			"brightness",
			"energy",
			"enlightenment",
			"generosity",
			"greatness",
			"growth",
			"happiness",
			"illumination",
			"joy",
			"success",
			"vitality",
			"warm",
		],
	},
	Judgement: {
		assoc: { elements: ["Fire"] },
		major: 20,
		words: [
			"absolution",
			"cause-and-effect",
			"release",
			"revelation",
			"sense of purpose",
			"spiritual rebirth",
			"transformation",
		],
	},
	World: {
		assoc: { celestial: ["Saturn"] },
		major: 21,
		words: [
			"accomplishment",
			"achievement",
			"completion",
			"ending",
			"enlightenment",
			"freedom",
			"fulfillment",
			"integration",
			"promotion",
		],
	},
	"Ace of Pentacles": {
		assoc: {},
		dates: ["2020-03-21T07:00:00.000Z", "2020-06-20T07:00:00.000Z"],
		words: [
			"abundance",
			"beginning",
			"creative urge",
			"fortune",
			"gain",
			"gift",
			"inspiration",
			"manifestation",
			"materialism",
			"opportunity",
			"physical world",
			"potential",
			"presence",
			"success",
		],
	},
	"2 of Pentacles": {
		assoc: { celestial: ["Jupiter"] },
		dates: ["2019-12-22T08:00:00.000Z", "2019-12-30T08:00:00.000Z"],
		words: [
			"balance",
			"choice",
			"dance",
			"decision",
			"dexterity",
			"division",
			"duality",
			"flexibility",
			"force",
			"joy",
		],
	},
	"3 of Pentacles": {
		assoc: { celestial: ["Mars"] },
		dates: ["2019-12-31T08:00:00.000Z", "2020-01-09T08:00:00.000Z"],
		words: [
			"art",
			"collaboration",
			"community",
			"concept",
			"consulting",
			"craft",
			"creativity",
			"flux",
			"inspiration",
			"installation",
			"outcome",
			"project",
			"skill",
			"talent",
			"teamwork",
			"trade",
			"work",
		],
	},
	"4 of Pentacles": {
		assoc: { celestial: ["Sun"] },
		dates: ["2020-01-10T08:00:00.000Z", "2020-01-19T08:00:00.000Z"],
		words: [
			"concentration",
			"control",
			"determination",
			"expansion",
			"gain",
			"greed",
			"hardy",
			"inheritance",
			"investment",
			"outcome",
			"possession",
			"possessive",
			"possessiveness",
			"realization",
			"savings",
			"selfishness",
			"stability",
			"stagnant",
			"thrift",
		],
	},
	"5 of Pentacles": {
		assoc: { celestial: ["Mercury"] },
		dates: ["2020-04-21T07:00:00.000Z", "2020-04-30T07:00:00.000Z"],
		words: [
			"adversity",
			"challenge",
			"change",
			"cold",
			"dark",
			"despair",
			"hardship",
			"insecurity",
			"lack",
			"loss",
			"need",
			"obstacle",
			"poverty",
			"rejection",
			"restriction",
			"sadness",
			"struggle",
			"victim",
			"waste",
			"yearning",
		],
	},
	"6 of Pentacles": {
		assoc: { celestial: ["Moon"] },
		dates: ["2020-05-01T07:00:00.000Z", "2020-05-10T07:00:00.000Z"],
		words: [
			"altruism",
			"balance",
			"comfort",
			"distribution",
			"fairness",
			"gain",
			"generosity",
			"gift",
			"growth",
			"help",
			"illumination",
			"journey",
			"justice",
			"mercy",
			"offer",
			"success",
			"sympathy",
			"wealth",
		],
	},
	"7 of Pentacles": {
		assoc: { celestial: ["Saturn"] },
		dates: ["2020-05-11T07:00:00.000Z", "2020-05-20T07:00:00.000Z"],
		words: [
			"accomplishment",
			"business",
			"challenge",
			"charity",
			"checking",
			"contemplation",
			"counting",
			"creativity",
			"deal",
			"development",
			"exchange",
			"expansion",
			"faith",
			"flowering",
			"investment",
			"planning",
			"ripening",
			"willpower",
		],
	},
	"8 of Pentacles": {
		assoc: { celestial: ["Sun"] },
		dates: ["2020-08-23T07:00:00.000Z", "2020-09-01T07:00:00.000Z"],
		words: [
			"autonomy",
			"change",
			"commitment",
			"craft",
			"dedication",
			"dexterity",
			"diligence",
			"finesse",
			"habit",
			"learning",
			"logic",
			"proficiency",
			"progress",
			"refinement",
			"repetitive",
			"routine",
			"skill",
			"strength",
			"technique",
		],
	},
	"9 of Pentacles": {
		assoc: { celestial: ["Venus"] },
		dates: ["2020-09-02T07:00:00.000Z", "2020-09-11T07:00:00.000Z"],
		words: [
			"accomplishment",
			"discernment",
			"elegance",
			"fruition",
			"fulfillment",
			"gratitude",
			"independence",
			"investment",
			"joy",
			"potential",
			"project",
			"prudence",
			"refinement",
			"safety",
			"self-reliance",
			"transformation",
		],
	},
	"10 of Pentacles": {
		assoc: { celestial: ["Mercury"] },
		dates: ["2020-09-12T07:00:00.000Z", "2020-09-22T07:00:00.000Z"],
		words: [
			"completion",
			"culmination",
			"ending",
			"family",
			"home",
			"legacy",
			"manifestation",
			"materialism",
			"safety",
			"treasure",
			"wealth",
		],
	},
	"Page of Pentacles": {
		assoc: {},
		dates: ["2020-03-21T07:00:00.000Z", "2020-06-20T07:00:00.000Z"],
		words: [
			"apprenticeship",
			"certainty",
			"dependable",
			"health",
			"inspiration",
			"potential",
			"practicality",
			"presence",
			"stability",
		],
	},
	"Knight of Pentacles": {
		assoc: {},
		dates: ["2020-04-11T07:00:00.000Z", "2020-05-10T07:00:00.000Z"],
		words: [
			"action",
			"delusion",
			"determination",
			"efficiency",
			"formation",
			"irrationality",
			"irresponsibility",
			"materialism",
			"opportunity",
			"wealth",
		],
	},
	"Queen of Pentacles": {
		assoc: {},
		dates: ["2020-12-13T08:00:00.000Z", "2020-01-09T08:00:00.000Z"],
		words: [
			"capability",
			"care",
			"comfort",
			"concept",
			"conservation",
			"generosity",
			"influence",
			"maternal",
			"organization",
			"protection",
			"rationality",
			"satisfaction",
			"sensuality",
			"warm",
			"wealth",
		],
	},
	"King of Pentacles": {
		assoc: {},
		dates: ["2020-08-11T07:00:00.000Z", "2020-09-11T07:00:00.000Z"],
		words: [
			"ambition",
			"authority",
			"business",
			"creative urge",
			"dependable",
			"discipline",
			"enterprising",
			"entrepreneur",
			"materialism",
			"rationality",
			"security",
			"stability",
			"success",
			"wealth",
		],
	},
	"Ace of Swords": {
		assoc: {},
		dates: ["2019-12-22T08:00:00.000Z", "2020-03-20T07:00:00.000Z"],
		words: [
			"accomplishment",
			"accountability",
			"anger",
			"beginning",
			"clarity",
			"creative urge",
			"determination",
			"potential",
			"responsibility",
			"retribution",
		],
	},
	"2 of Swords": {
		assoc: { celestial: ["Moon"] },
		dates: ["2020-09-23T07:00:00.000Z", "2020-10-02T07:00:00.000Z"],
		words: [
			"adaptation",
			"adjustment",
			"balance",
			"blindness",
			"blockage",
			"choice",
			"compromise",
			"contemplation",
			"decision",
			"denial",
			"duality",
			"duel",
			"force",
			"grace",
			"meditation",
			"stalemate",
			"subtlety",
			"tension",
		],
	},
	"3 of Swords": {
		assoc: { celestial: ["Saturn"] },
		dates: ["2020-10-03T07:00:00.000Z", "2020-10-12T07:00:00.000Z"],
		words: [
			"betrayal",
			"community",
			"concept",
			"flux",
			"grief",
			"guilt",
			"heartbreak",
			"injury",
			"loneliness",
			"meditation",
			"outcome",
			"pain",
			"regret",
			"rejection",
			"sadness",
			"separation",
			"suffering",
			"treason",
		],
	},
	"4 of Swords": {
		assoc: { celestial: ["Jupiter"] },
		dates: ["2020-10-13T07:00:00.000Z", "2020-10-22T07:00:00.000Z"],
		words: [
			"expansion",
			"outcome",
			"peace",
			"possession",
			"protection",
			"recuperation",
			"reflection",
			"rest",
			"retirement",
			"retreat",
			"sleep",
			"solitude",
			"stability",
			"truce",
			"waiting",
		],
	},
	"5 of Swords": {
		assoc: { celestial: ["Venus"] },
		dates: ["2020-01-20T08:00:00.000Z", "2020-01-29T08:00:00.000Z"],
		words: [
			"adversity",
			"challenge",
			"change",
			"conflict",
			"cowardice",
			"cruelty",
			"defeat",
			"degradation",
			"difficulty",
			"disgrace",
			"domination",
			"drama",
			"exile",
			"failure",
			"power",
			"restriction",
			"retribution",
			"sadness",
			"slander",
			"tension",
			"uncertainty",
			"unfairness",
			"weakness",
		],
	},
	"6 of Swords": {
		assoc: { celestial: ["Mercury"] },
		dates: ["2020-01-30T08:00:00.000Z", "2020-02-08T08:00:00.000Z"],
		words: [
			"balance",
			"curiosity",
			"exploration",
			"flux",
			"growth",
			"illumination",
			"journey",
			"movement",
			"obstacle",
			"reasoning",
			"recovery",
			"speed",
			"transfer",
			"transition",
			"traveling",
		],
	},
	"7 of Swords": {
		assoc: { celestial: ["Moon"] },
		dates: ["2020-02-09T08:00:00.000Z", "2020-02-18T08:00:00.000Z"],
		words: [
			"attempt",
			"betrayal",
			"challenge",
			"confidentiality",
			"creativity",
			"deception",
			"defeat",
			"faith",
			"gossip",
			"hidden",
			"loss",
			"plan",
			"secret",
			"stealth",
			"willpower",
		],
	},
	"8 of Swords": {
		assoc: { celestial: ["Jupiter"] },
		dates: ["2020-05-21T07:00:00.000Z", "2020-05-31T07:00:00.000Z"],
		words: [
			"betrayal",
			"bondage",
			"censorship",
			"change",
			"entrapment",
			"isolation",
			"laziness",
			"logic",
			"obstacle",
			"progress",
			"restriction",
			"strength",
			"stunned",
		],
	},
	"9 of Swords": {
		assoc: { celestial: ["Mars"] },
		dates: ["2020-06-01T07:00:00.000Z", "2020-06-10T07:00:00.000Z"],
		words: [
			"concern",
			"crisis",
			"deceit",
			"despair",
			"difficulty",
			"disappointment",
			"doubt",
			"fruition",
			"fulfillment",
			"guilt",
			"loss",
			"nightmare",
			"overwhelming",
			"potential",
			"regret",
			"sadness",
			"sleeplessness",
			"suffering",
			"transformation",
			"uncertainty",
			"worry",
		],
	},
	"10 of Swords": {
		assoc: { celestial: ["Sun"] },
		dates: ["2020-06-11T07:00:00.000Z", "2020-06-20T07:00:00.000Z"],
		words: [
			"blockage",
			"completion",
			"crisis",
			"culmination",
			"defeat",
			"disaster",
			"ending",
			"failure",
			"fear",
			"manifestation",
			"obsession",
			"pain",
			"sacrifice",
			"sadness",
		],
	},
	"Page of Swords": {
		assoc: {},
		dates: ["2019-12-22T08:00:00.000Z", "2020-03-20T07:00:00.000Z"],
		words: [
			"aggression",
			"anger",
			"attention",
			"calculation",
			"dexterity",
			"energy",
			"vigilant",
		],
	},
	"Knight of Swords": {
		assoc: {},
		dates: ["2020-01-10T08:00:00.000Z", "2020-02-08T08:00:00.000Z"],
		words: [
			"action",
			"anger",
			"determination",
			"extreme",
			"formation",
			"haste",
			"hostility",
			"impatience",
			"impetuous",
			"movement",
			"opportunity",
			"power",
			"rebel",
			"temperamental",
			"violence",
			"warrior",
		],
	},
	"Queen of Swords": {
		assoc: {},
		dates: ["2020-09-12T07:00:00.000Z", "2020-10-12T07:00:00.000Z"],
		words: [
			"concept",
			"decision",
			"directness",
			"discriminating",
			"honesty",
			"influence",
			"logic",
			"organization",
			"perception",
			"power",
			"pretentious",
			"rigorous",
			"satisfaction",
			"strength",
		],
	},
	"King of Swords": {
		assoc: {},
		dates: ["2020-05-11T07:00:00.000Z", "2020-06-10T07:00:00.000Z"],
		words: [
			"analysis",
			"articulation",
			"authority",
			"calm",
			"creative urge",
			"diplomacy",
			"focus",
			"guidance",
			"impartiality",
			"intellect",
			"judgment",
			"justice",
			"logic",
			"order",
			"power",
			"precision",
			"rationality",
			"stability",
			"tact",
		],
	},
	"Ace of Cups": {
		assoc: {},
		dates: ["2020-09-23T07:00:00.000Z", "2020-12-21T08:00:00.000Z"],
		words: [
			"abundance",
			"adaptation",
			"beginning",
			"care",
			"compassion",
			"creative urge",
			"deluge",
			"emotion",
			"fertility",
			"intuition",
			"joy",
			"love",
			"memory",
			"openness",
			"opportunity",
			"potential",
			"purification",
			"romance",
			"unconscious mind",
		],
	},
	"2 of Cups": {
		assoc: { celestial: ["Venus"] },
		dates: ["2020-06-21T07:00:00.000Z", "2020-07-01T07:00:00.000Z"],
		words: [
			"agreement",
			"attraction",
			"balance",
			"decision",
			"duality",
			"force",
			"friendship",
			"harmony",
			"joy",
			"love",
			"marriage",
			"partnership",
			"passion",
			"relationship",
			"sympathy",
			"understanding",
			"union",
		],
	},
	"3 of Cups": {
		assoc: { celestial: ["Mercury"] },
		dates: ["2020-07-02T07:00:00.000Z", "2020-07-11T07:00:00.000Z"],
		words: [
			"birth",
			"collaboration",
			"comfort",
			"communion",
			"community",
			"concept",
			"dance",
			"excitement",
			"feast",
			"flux",
			"friendship",
			"health",
			"intoxication",
			"joy",
			"outcome",
			"relief",
			"sharing",
			"teamwork",
			"victory",
			"work",
		],
	},
	"4 of Cups": {
		assoc: { celestial: ["Moon"] },
		dates: ["2020-07-12T07:00:00.000Z", "2020-07-21T07:00:00.000Z"],
		words: [
			"boredom",
			"complacency",
			"contemplation",
			"disappointment",
			"discontent",
			"discouragement",
			"disdain",
			"dissatisfaction",
			"distraction",
			"expansion",
			"expectation",
			"habit",
			"nausea",
			"outcome",
			"possession",
			"refusal",
			"stability",
		],
	},
	"5 of Cups": {
		assoc: { celestial: ["Mars"] },
		dates: ["2020-10-23T07:00:00.000Z", "2020-11-01T07:00:00.000Z"],
		words: [
			"addiction",
			"adversity",
			"bereavement",
			"change",
			"despair",
			"difficulty",
			"disappointment",
			"fear",
			"guilt",
			"pessimism",
			"refusal",
			"regret",
			"restriction",
			"sacrifice",
			"sadness",
			"shortage",
			"sorrow",
			"vanity",
		],
	},
	"6 of Cups": {
		assoc: { celestial: ["Sun"] },
		dates: ["2020-11-02T08:00:00.000Z", "2020-11-12T08:00:00.000Z"],
		words: [
			"balance",
			"endowment",
			"exchange",
			"friendship",
			"gift",
			"growth",
			"hearth",
			"home",
			"illumination",
			"journey",
			"joy",
			"message",
			"nostalgia",
			"offer",
			"passion",
			"peace",
			"remembrance",
			"romance",
			"safety",
			"sentiment",
			"sharing",
			"yearning",
		],
	},
	"7 of Cups": {
		assoc: { celestial: ["Venus"] },
		dates: ["2020-11-13T08:00:00.000Z", "2020-11-22T08:00:00.000Z"],
		words: [
			"challenge",
			"choice",
			"creativity",
			"deception",
			"desire",
			"dream",
			"faith",
			"fantasy",
			"illusion",
			"imagination",
			"indecision",
			"option",
			"selection",
			"temptation",
			"variety",
			"vision",
			"willpower",
		],
	},
	"8 of Cups": {
		assoc: { celestial: ["Saturn"] },
		dates: ["2020-02-19T08:00:00.000Z", "2020-02-28T08:00:00.000Z"],
		words: [
			"adventure",
			"change",
			"escapism",
			"freedom",
			"journey",
			"logic",
			"loneliness",
			"movement",
			"progress",
			"rejection",
			"renunciation",
			"restart",
			"shyness",
			"strength",
			"transition",
			"travel",
		],
	},
	"9 of Cups": {
		assoc: { celestial: ["Jupiter"] },
		dates: ["2020-03-01T08:00:00.000Z", "2020-03-10T07:00:00.000Z"],
		words: [
			"admiration",
			"affection",
			"contentment",
			"fruition",
			"fulfillment",
			"pleasure",
			"potential",
			"satisfaction",
			"sensuality",
			"success",
			"transformation",
			"virtue",
			"yes",
		],
	},
	"10 of Cups": {
		assoc: { celestial: ["Mars"] },
		dates: ["2020-03-11T07:00:00.000Z", "2020-03-20T07:00:00.000Z"],
		words: [
			"commitment",
			"community",
			"completion",
			"contentment",
			"culmination",
			"ending",
			"family",
			"friendship",
			"fulfillment",
			"happiness",
			"harmony",
			"joy",
			"manifestation",
			"peace",
			"rest",
			"success",
		],
	},
	"Page of Cups": {
		assoc: {},
		dates: ["2020-09-23T07:00:00.000Z", "2020-12-21T08:00:00.000Z"],
		words: [
			"contemplation",
			"devotion",
			"emotion",
			"enthusiasm",
			"friendship",
			"gentle",
			"grace",
			"idea",
			"insight",
			"inspiration",
			"instinct",
			"intuition",
			"joy",
			"openness",
			"perception",
			"potential",
			"presence",
			"receptivity",
			"romance",
			"sweetness",
			"synchronicity",
		],
	},
	"Knight of Cups": {
		assoc: {},
		dates: ["2020-10-13T07:00:00.000Z", "2020-11-12T08:00:00.000Z"],
		words: [
			"action",
			"charm",
			"compassion",
			"determination",
			"emotion",
			"encouragement",
			"flattery",
			"formation",
			"ideal",
			"imagination",
			"insight",
			"introspection",
			"opportunity",
			"pleasure",
			"reflection",
			"seduction",
			"sensitivity",
			"temperamental",
			"warm",
		],
	},
	"Queen of Cups": {
		assoc: {},
		dates: ["2020-06-11T07:00:00.000Z", "2020-07-11T07:00:00.000Z"],
		words: [
			"affection",
			"attraction",
			"charm",
			"compassion",
			"concept",
			"emotion",
			"empathy",
			"friend",
			"influence",
			"intuition",
			"kindness",
			"listening",
			"love",
			"mystery",
			"reflection",
			"responsive",
			"satisfaction",
			"sensitivity",
			"support",
			"sweetness",
			"sympathy",
			"tranquility",
			"understanding",
			"warm",
		],
	},
	"King of Cups": {
		assoc: {},
		dates: ["2020-02-09T08:00:00.000Z", "2020-03-10T07:00:00.000Z"],
		words: [
			"affection",
			"attraction",
			"authority",
			"charm",
			"chivalry",
			"compassion",
			"composure",
			"cooperation",
			"creative urge",
			"culture",
			"grace",
			"intuition",
			"joy",
			"love",
			"loyalty",
			"protection",
			"stability",
			"subtlety",
			"sympathy",
			"wisdom",
		],
	},
	"Ace of Wands": {
		assoc: {},
		dates: ["2020-06-21T07:00:00.000Z", "2020-09-22T07:00:00.000Z"],
		words: [
			"adventure",
			"beginning",
			"creative urge",
			"creativity",
			"energy",
			"enterprise",
			"inspiration",
			"intellect",
			"originality",
			"phallic",
			"potency",
			"potential",
			"strength",
			"vision",
		],
	},
	"2 of Wands": {
		assoc: { celestial: ["Mars"] },
		dates: ["2020-03-21T07:00:00.000Z", "2020-03-30T07:00:00.000Z"],
		words: [
			"ambition",
			"appetite",
			"arrogance",
			"balance",
			"curiosity",
			"decision",
			"design",
			"desire",
			"drive",
			"duality",
			"energy",
			"enthusiasm",
			"expectation",
			"force",
			"lust",
			"plan",
			"progress",
			"project",
			"restlessness",
			"risk",
			"search",
			"thirst",
			"yearning",
		],
	},
	"3 of Wands": {
		assoc: { celestial: ["Sun"] },
		dates: ["2020-03-31T07:00:00.000Z", "2020-04-10T07:00:00.000Z"],
		words: [
			"action",
			"anticipation",
			"assistance",
			"attention",
			"business",
			"care",
			"community",
			"concept",
			"contemplation",
			"creativity",
			"effort",
			"expansion",
			"exploration",
			"flux",
			"foresight",
			"help",
			"hope",
			"motion",
			"observation",
			"outcome",
			"patience",
			"preparation",
			"trade",
			"waiting",
		],
	},
	"4 of Wands": {
		assoc: { celestial: ["Venus"] },
		dates: ["2020-04-11T07:00:00.000Z", "2020-04-20T07:00:00.000Z"],
		words: [
			"achievement",
			"blessing",
			"celebration",
			"domestic bliss",
			"expansion",
			"freedom",
			"harmony",
			"joy",
			"outcome",
			"peace",
			"possession",
			"prosperity",
			"serenity",
			"stability",
		],
	},
	"5 of Wands": {
		assoc: { celestial: ["Saturn"] },
		dates: ["2020-07-22T07:00:00.000Z", "2020-08-01T07:00:00.000Z"],
		words: [
			"action",
			"adversity",
			"challenge",
			"change",
			"chaos",
			"competition",
			"energy",
			"game",
			"imitation",
			"restriction",
			"rivalry",
			"strife",
			"struggle",
			"training",
		],
	},
	"6 of Wands": {
		assoc: { celestial: ["Jupiter"] },
		dates: ["2020-08-02T07:00:00.000Z", "2020-08-11T07:00:00.000Z"],
		words: [
			"accomplishment",
			"announcement",
			"arrival",
			"award",
			"balance",
			"fame",
			"growth",
			"harmony",
			"illumination",
			"journey",
			"message",
			"parade",
			"publicity",
			"success",
			"triumph",
		],
	},
	"7 of Wands": {
		assoc: { celestial: ["Mars"] },
		dates: ["2020-08-11T07:00:00.000Z", "2020-08-22T07:00:00.000Z"],
		words: [
			"challenge",
			"competition",
			"creativity",
			"defense",
			"faith",
			"inspiration",
			"negotiation",
			"nonconformity",
			"opinion",
			"opposition",
			"perseverance",
			"self-confidence",
			"struggle",
			"willpower",
		],
	},
	"8 of Wands": {
		assoc: { celestial: ["Mercury"] },
		dates: ["2020-11-23T08:00:00.000Z", "2020-12-02T08:00:00.000Z"],
		words: [
			"alliance",
			"announcement",
			"change",
			"climax",
			"decision",
			"logic",
			"message",
			"movement",
			"option",
			"progress",
			"reaction",
			"speed",
			"strength",
			"traveling",
		],
	},
	"9 of Wands": {
		assoc: { celestial: ["Moon"] },
		dates: ["2020-12-03T08:00:00.000Z", "2020-12-12T08:00:00.000Z"],
		words: [
			"adventure",
			"arrival",
			"defense",
			"experience",
			"fruition",
			"fulfillment",
			"guard",
			"integration",
			"obstacle",
			"opposition",
			"potential",
			"rationality",
			"resilience",
			"risk",
			"strength",
			"threshold",
			"transformation",
			"vigilance",
			"work",
		],
	},
	"10 of Wands": {
		assoc: { celestial: ["Saturn"] },
		dates: ["2020-12-13T08:00:00.000Z", "2020-12-21T08:00:00.000Z"],
		words: [
			"burden",
			"completion",
			"culmination",
			"ending",
			"exhaustion",
			"manifestation",
			"overwhelming",
			"strength",
			"work",
		],
	},
	"Page of Wands": {
		assoc: {},
		dates: ["2020-06-21T07:00:00.000Z", "2020-09-22T07:00:00.000Z"],
		words: [
			"candid",
			"commitment",
			"creativity",
			"enthusiasm",
			"friendship",
			"impetuous",
			"insight",
			"love",
			"loyalty",
			"playful",
			"support",
			"travel",
			"vitality",
		],
	},
	"Knight of Wands": {
		assoc: {},
		dates: ["2020-07-12T07:00:00.000Z", "2020-08-11T07:00:00.000Z"],
		words: [
			"action",
			"adventure",
			"capability",
			"chivalry",
			"courage",
			"determination",
			"enterprising",
			"exploration",
			"foresight",
			"formation",
			"idealism",
			"impatience",
			"impetuous",
			"intellect",
			"opportunity",
			"optimism",
			"passion",
			"travel",
		],
	},
	"Queen of Wands": {
		assoc: {},
		dates: ["2020-03-11T07:00:00.000Z", "2020-04-10T07:00:00.000Z"],
		words: [
			"autonomy",
			"concept",
			"dignity",
			"dominance",
			"exuberance",
			"influence",
			"passion",
			"power",
			"satisfaction",
			"self-confidence",
		],
	},
	"King of Wands": {
		assoc: {},
		dates: ["2020-11-13T08:00:00.000Z", "2020-12-12T08:00:00.000Z"],
		words: [
			"authority",
			"bold",
			"boss",
			"courageous",
			"creative urge",
			"dominance",
			"entrepreneur",
			"experience",
			"explosive",
			"initiative",
			"inspiring",
			"motivator",
			"persuasive",
			"respect",
			"security",
			"stability",
			"vision",
		],
	},
};

const REVERSED = " reversed";

const isReversed = (card) => card.includes(REVERSED),
	trimReversed = (card) =>
		isReversed(card) ? card.substring(0, card.indexOf(REVERSED)) : card;

const getOppositeWords = (word) => {
	const result = opposites
		.filter((oppoPair) => oppoPair.includes(word))
		.map((oppoPair) => oppoPair[oppoPair.indexOf(word) ? 0 : 1]);
	result.length === 0 &&
		result.push(
			word.indexOf("no ") === 0 ? word.substring(3) : "no " + word
		);
	return result;
};

// IMPORTANT --
// make sure words are balanced:
const wordClustersRecursiveHelper = (
	word,
	level,
	friends = new Set(),
	enemies = new Set()
) => {
	const set = level % 2 ? friends : enemies,
		filtered = getOppositeWords(word).filter(
			(opposite) => !set.has(opposite)
		);
	filtered.forEach((opposite) => {
		set.add(opposite);
		wordClustersRecursiveHelper(opposite, level + 1, friends, enemies);
	});
	return {
		friends: [...friends].sort(),
		enemies: [...enemies].sort(),
	};
};

const wordClustersRecursive = (word) => wordClustersRecursiveHelper(word, 0);

const updateCards = () =>
	Object.keys(cards).forEach((card) => {
		card = trimReversed(card);
		const words = [...cards[card].words];
		cards[card].words = [];
		cards[card + REVERSED] = { ...cards[card], words: [] };
		words.forEach((word) => {
			const clusters = wordClustersRecursive(word);
			cards[card].words.push(...clusters.friends);
			cards[card + REVERSED].words.push(...clusters.enemies);
		});
		cards[card].words = [...new Set(cards[card].words.flat())].sort();
		cards[card + REVERSED].words = [
			...new Set(cards[card + REVERSED].words.flat()),
		].sort();
	});

// firing multiple times,
// consider placing inside top component (App's)
// initial render:
// useEffect(() => updateCards(), [])
updateCards();

// includes reversed!
const allCardNames = Object.keys(cards);

const getRandomSpread = (size) => {
	const result = [];
	let next;
	while (result.length < size) {
		next = allCardNames[Math.floor(Math.random() * allCardNames.length)];
		!result
			.map((card) => card.replace(" reversed", ""))
			.includes(next.replace(" reversed", "")) && result.push(next);
	}
	return result;
};

export default cards;
export {
	allCardNames,
	wordClustersRecursive,
	isReversed,
	trimReversed,
	getRandomSpread,
};
