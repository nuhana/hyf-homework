const button = document.querySelector("button");
const sCounter = document.getElementById("press-s-counter");
const lCounter = document.getElementById("press-l-counter");

button.addEventListener("click", () => {
  const input = document.querySelector("input").value;
  document.addEventListener("keypress", getKey);
  //take the input as timer
  setTimeout(() => {
    if (countS > countL) {
      alert("player s win");
      resetGame();
    } else if (countS < countL) {
      alert("player l win");
      resetGame();
    } else {
      alert("no winner ");
    }
  }, input * 1000);
  let time = input;
  //countdown timer
  setInterval(() => {
    const h2 = document.querySelector("h2");
    h2.innerHTML = `your game will end in${time}`;
    time--;
    if (time >= 0) {
      h2.innerHTML = `your game will end in${time}`;
    } else {
      h2.innerHTML = "gameover";
    }
  }, 1000);
});
let countS = 0;
let countL = 0;
function getKey(event) {
  if (event.keyCode === 83) {
    countS++;
    sCounter.innerHTML = countS;
  }
  if (event.keyCode === 76) {
    countL++;
    lCounter.innerHTML = countL;
  }
}
function resetGame() {
  countS = 0;
  countL = 0;
  sCounter.innerHTML = " ";
  lCounter.innerHTML = " ";
}
