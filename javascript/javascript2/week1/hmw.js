let spiritAnimals = [
  "adventurous wolf",
  "amazing unicorn",
  "mystical tiger",
  "wild dragon",
  "creative dolphin",
  "speedy eagle",
  "exciting dove",
  "magical monkey",
  "victorious butterfly",
  "intuitive elephant",
];
const randomNum = Math.floor(Math.random() * 10) + 0;
const randomName = spiritAnimals[randomNum];
const randomNum2 = Math.floor(Math.random() * 10) + 0;
const randomName2 = spiritAnimals[randomNum2];
const button = document.createElement("button");
button.innerHTML = "enter";
const button2 = document.createElement("button");
button2.innerHTML = "new spirit animal";
const body = document.querySelector("body");
body.appendChild(button);
body.appendChild(button2);
function func() {
  const type = document.getElementsByName("show");
  if (type[0].checked) {
    button.addEventListener("click", function () {
      const inneButton = document.createElement("inneButton");
      inneButton.innerText = randomName;
      body.appendChild(inneButton);
    });
    button2.addEventListener("click", function () {
      const inneButton2 = document.createElement("inneButton2");
      inneButton2.innerText = randomName2;
      body.appendChild(inneButton2);
    });
  } else if (type[1].checked) {
    const inptField = document.getElementById("user-name");
    inptField.addEventListener("mouseover", function () {
      const inneButton = document.createElement("inneButton");
      inneButton.innerText = randomName;

      body.appendChild(inneButton);
    });
  } else if (type[2].checked) {
    button.addEventListener("click", function () {
      const innerButton = document.createElement("innerButton");
      const inputText = document.getElementById("user-name").value;
      if (inputText == "" || inputText == null) {
        alert("Please Fill Name Field");
        return false;
      }

      innerButton.innerText = inputText;
      body.appendChild(innerButton);

      const innerButton2 = document.createElement("innerButton2");
      innerButton2.innerText = " - " + randomName;
      body.appendChild(innerButton2);
    });

    button2.addEventListener("click", function () {
      const innerButton = document.createElement("innerButton");
      const inputText2 = document.getElementById("user-name").value;
      if (inputText2 == "" || inputText2 == null) {
        alert("Please Fill Name Field");
        return false;
      }
      innerButton.innerText = inputText2;
      body.appendChild(innerButton);

      const inneButton2 = document.createElement("inneButton2");
      inneButton2.innerText = " - " + randomName2;
      body.appendChild(inneButton2);
    });
  }
}
