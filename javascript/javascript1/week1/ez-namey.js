const firstWords = [
  "easy",
  "awesome",
  "amazing",
  "beautiful",
  "business",
  "best",
  "bare",
  "good",
  "perfect",
  "primary",
];
const secondWords = [
  "Corporation",
  "motivation",
  "plan",
  "start",
  "patners",
  "office",
  "five",
  "hands",
  "home",
  "profit",
];

const randomNumber = Math.floor(Math.random() * 10) + 0;

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const length =
  firstWords[randomNumber].length + secondWords[randomNumber].length;

console.log(
  " the statrtup " + startupName + " contains" + " " + length + " characers"
);
