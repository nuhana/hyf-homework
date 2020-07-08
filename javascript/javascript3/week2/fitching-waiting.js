fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => {
      console.log(data);
    }, 3000);
  })
  .catch(() => {
    console.log("error");
  });

//////
async function setTimeoutAsync() {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const json = await response.json();
    setTimeout(() => {
      console.log(json);
    }, 3000);
  } catch {
    console.log("error");
  }
}
setTimeoutAsync();
