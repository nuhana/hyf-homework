const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]; // returns 'ø'
function findShortest(danishWords) {
  let shortLength = Infinity;
  let shortest = "";

  if (danishWords.length > 0) {
    for (let i = 0; i < danishWords.length; i++) {
      if (
        typeof danishWords[i] === "string" &&
        danishWords[i].length < shortLength
      ) {
        shortest = danishWords[i];
        shortLength = danishWords[i].length;
      }
    }
  }

  return shortest;
}
console.log(findShortest(danishWords));
