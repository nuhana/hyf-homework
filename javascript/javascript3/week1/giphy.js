const button = document.querySelector("button");
button.addEventListener("click", () => {
  let giphyName = document.getElementById("giphy-name").value;
  if (giphyName != "") {
    url =
      "https://api.giphy.com/v1/gifs/search?api_key=a7m3yo8CyGVk1GMcf3sLXZ13JyL783OJ&q=" +
      giphyName +
      "&limit=" +
      document.getElementById("giphy-number").value;

    fetch(url)
      .then((response) => response.json())
      .then((giphy) => {
        console.log(giphy);
        for (let i = 0; i < giphy.data.length; i++) {
          const img = document.createElement("img");
          img.src = giphy.data[i].images.original.url;
          document.body.appendChild(img);
        }
      });
  } else {
    alert("you should write giphy name");
  }
});
