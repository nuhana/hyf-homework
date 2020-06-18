console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

////
const input = document.getElementById("searchBar");
input.addEventListener("keyup", () => {
  let input = document.getElementById("searchBar").value.toLowerCase();
  const filteredValue = products.filter((product) => {
    return product.name.toLowerCase().includes(input);
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredValue);
});
/////
renderProducts(products);
const input1 = document.getElementById("max-price");
input1.addEventListener("keyup", () => {
  let maxValue = document.getElementById("max-price").value;
  const filteredPrice = products.filter((product) => {
    return product.price < maxValue;
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredPrice);
});
/////
function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}
renderProducts(products);
