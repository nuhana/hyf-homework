const danishString = ["Jeg har en blå bil"];
const danishString2 = ["Blå grød med røde bær"];
function danish(danishString) {
  const string = danishString.join();
  let count = 0;
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let strings = string[i];
    if (
      strings.includes("æ") ||
      strings.includes("ø") ||
      strings.includes("å")
    ) {
      if (!obj[strings]) {
        obj[strings] = 0;
      }
      count++;
      obj[strings]++;
    }
  }
  obj.total = count;
  console.log(obj);
}
danish(danishString);
danish(danishString2);
