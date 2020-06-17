const danishString = ["Jeg har en blå bil"];
const danishString2 = ["Blå grød med røde bær"];
function danish(danishString) {
  const danishWords = danishString.join();
  let count = 0;
  let danishLetters = {};
  for (let i = 0; i < danishWords.length; i++) {
    let word = danishWords[i];
    if (
      word.includes("Æ") ||
      word.includes("Ø") ||
      word.includes("Å") ||
      word.includes("æ") ||
      word.includes("ø") ||
      word.includes("å")
    ) {
      if (!danishLetters[word]) {
        danishLetters[word] = 0;
      }
      count++;
      danishLetters[word]++;
    }
  }
  danishLetters.total = count;
  console.log(danishLetters);
}
danish(danishString);
danish(danishString2);
