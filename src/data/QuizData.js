export const quizData = [
	{
		questionNumber: 1,
		question: "Z czego słynie Benjamin Franklin?",
		studyMaterials:
			"loreasdjfnakljsdnfkaksndfkasndfkjsdnfaksjdfnaskjdfa;sk;djfnaskdjfnaskdjfnaskdjfnaslkdjflaskjdfnlskadjfnlskdkjfnaslkdkjfnaslkdkjfnaslkdjfnaslkdkjfnaslkdjfn",
		correctAnswer: "był amerykańskim dyplomatą",
		answers: [
			"byl trzecim prezydentem Stanów Zjednoczonych",
			"był najmłodszym członkiem Konwencji Konstytucyjnej",
			"był amerykańskim dyplomatą",
			"wynalazł samolot",
		],
	},

	{
		questionNumber: 2,
		question: "Co zrobił Martin Luther King Jr. ?",
		studyMaterials:
			"asdnfiajsefninqefwuwonfrioqwbfribrfebgrolebgruoqebgriuoebgroubegrioebgroubegroiebgrioebgoerbgo",
		correctAnswer: "walczył o prawa obywatelskie",
		answers: [
			"został senatorem Stanów Zjednoczonych",
			"startowal na prezydenta Stanów Zjednoczonych",
			"walczył o prawa wyborcze kobiet",
			"walczył o prawa obywatelskie",
		],
	},

	{
		questionNumber: 3,
		question:
			"Jakie dwa prawa, posiada każda osoba mieszkająca w Stanach Zjednoczonych?",
		studyMaterials:
			"asdnfiajsefninqefwuwonfrioqwbfribrfebgrolebgruoqebgriuoebgroubegrioebgroubegroiebgrioebgoerbgo",
		correctAnswer: "wolnośc słowa oraz wolność religijna",
		answers: [
			"wolność słowa oraz wolność do startowania na prezydenta",
			"wolność składania petycji do rządu oraz wolność do łamania przpisów drogowych",
			"wolnośc słowa oraz wolność religijna",
			"wolnośc religijna oraz wolnośc do zawierania umów z innymi państwami",
		],
	},

	{
		questionNumber: 4,
		question: "Na ile lat wybieramy prezydenta Stanów Zjednoczonych?",
		studyMaterials:
			"asdnfiajsefninqefwuwonfrioqwbfribrfebgrolebgruoqebgriuoebgroubegrioebgroubegroiebgrioebgoerbgo",
		correctAnswer: "cztery(4)",
		answers: ["cztery(4)", "dwa(2)", "dziesięć(10)", "osiem(8)"],
	},

	{
		questionNumber: 5,
		question:
			"Kiedy jest ostatni dzień, w którym można wysyłać federalne formularze podatkowe?",
		studyMaterials:
			"asdnfiajsefninqefwuwonfrioqwbfribrfebgrolebgruoqebgriuoebgroubegrioebgroubegroiebgrioebgoerbgo",
		correctAnswer: "15 Kwietnia",
		answers: ["15 Marca", "15 Maja", "4 Lipca", "15 Kwietnia"],
	},
];

// export default QuizData;

export const fetchData = async (n = 5) => 
	Promise.resolve(quizData.sort(() => 0.5 - Math.random()).slice(0, n));



