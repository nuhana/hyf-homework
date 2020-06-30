const button = document.querySelector("button");
button.addEventListener("click", () => {
  url =
    "https://api.giphy.com/v1/gifs/search?api_key=a7m3yo8CyGVk1GMcf3sLXZ13JyL783OJ&q=" +
    document.getElementById("giphy-name").value +
    "&limit=" +
    document.getElementById("giphy-number").value;
  fetch(url)
    .then((response) => response.json())
    .then((giphy) => {
      for (let i = 0; i < giphy.data.length; i++) {
        const img = document.createElement("img");
        img.src = giphy.data[i].images.original.url;
        document.body.appendChild(img);
      }
    });
});
