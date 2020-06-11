const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]; // returns 'ø'
function findShortest(d) {
  return d.reduce(function (prevWord, currWord) {
    if (currWord.length < prevWord.length) {
      console.log(currWord);
      return currWord;
    } else return prevWord;
  });
}

findShortest(danishWords); // returns 'ø'
