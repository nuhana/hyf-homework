let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
function addCandy(candyType, weight) {
  let price;
  if (candyType === "sweet") {
    price = 0.5 * weight;
    boughtCandyPrices.push(price);
    return;
  }
  if (candyType === "Chocolate") {
    price = 0.7 * weight;
    let n = boughtCandyPrices.push(price);
    return;
  }
  if (candyType === "Toffee") {
    price = 1.1 * weight;
    let n = boughtCandyPrices.push(price);
    return;
  }
  if (candyType === "Chewing-gum") {
    price = 0.03 * weight;
    let n = boughtCandyPrices.push(price);
    return;
  }
}
addCandy("sweet", 30);
addCandy("Chocolate", 20);
console.log(boughtCandyPrices);
console.log(amountToSpend);

function canBuyMoreCandy(candyType) {
  let total = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total = total + boughtCandyPrices[i];
  }
  console.log(total);
  if (amountToSpend > total) {
    console.log("You can buy more, so please do!");
    console.log(candyType);
    return true;
  } else {
    console.log("Enough candy for you!");
    return false;
  }
}
canBuyMoreCandy("sweet");
