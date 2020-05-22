let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    let price1 = 0.5 * weight;
    boughtCandyPrices.push(price1);
    return;
  }
  if (candyType === "Chocolate") {
    let price2 = 0.7 * weight;
    let n = boughtCandyPrices.push(price2);
    return;
  }
  if (candyType === "Toffee") {
    let price2 = 1.1 * weight;
    let n = boughtCandyPrices.push(price2);
    return;
  }
  if (candyType === "Chewing-gum") {
    let price2 = 0.03 * weight;
    let n = boughtCandyPrices.push(price2);
    return;
  }
}
addCandy("sweet", 20);
addCandy("Chocolate", 100);
console.log(boughtCandyPrices);
console.log(amountToSpend);

function canBuyMoreCandy() {
  let total = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total = total + boughtCandyPrices[i];
  }
  console.log(total);
  if (amountToSpend > total) {
    console.log("You can buy more, so please do!");
    return true;
  } else {
    console.log("Enough candy for you!");
    return false;
  }
}
canBuyMoreCandy();
