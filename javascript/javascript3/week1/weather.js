const cityButton = document.getElementById("city-name");

cityButton.addEventListener("click", () => {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    document.querySelector("input").value +
    "&appid=4fdf58b7e131574d042a604479aa86ab" +
    "&units=metric";
  fetch(url)
    .then((response) => response.json())
    .then((weather) => {
      const img = document.createElement("img");
      img.src =
        "http://openweathermap.org/img/wn/" +
        weather.weather[0].icon +
        "@2x.png";
      document.body.appendChild(img);
      const h1 = document.createElement("h1");
      h1.innerHTML = `  ${weather.name}<br>
      Temperature    : ${weather.main.temp}<br>
      Wind speed     : ${weather.wind.speed}<br>
      weather clouds : ${weather.weather[0].description}<br>
      city sunrise   : ${weather.sys.sunrise}<br>
      city sunset    : ${weather.sys.sunset}`;

      document.body.appendChild(h1);
    });
});

//Use user current position
const locationButton = document.getElementById("location");

locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latiTude = position.coords.latitude;
      longiTude = position.coords.longitude;
      let url2 =
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
        latiTude +
        "&lon=" +
        longiTude +
        "&appid=4fdf58b7e131574d042a604479aa86ab";
      fetch(url2)
        .then((response) => response.json())
        .then((UserLocationWeather) => {
          const img = document.createElement("img");
          img.src =
            "http://openweathermap.org/img/wn/" +
            UserLocationWeather.weather[0].icon +
            "@2x.png";
          document.body.appendChild(img);
          const h1 = document.createElement("h1");
          h1.innerHTML = ` ${UserLocationWeather.name}<br>
      Temperature  : ${UserLocationWeather.main.temp}<br>
      Wind speed    : ${UserLocationWeather.wind.speed}<br>
      weather clouds  : ${UserLocationWeather.weather[0].description}<br>
      city sunrise  : ${UserLocationWeather.sys.sunrise}<br>
      city sunset  : ${UserLocationWeather.sys.sunset}`;
          document.body.appendChild(h1);
        });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});
let input = document.querySelector("input");
const storedInput = localStorage.getItem("city");
if (input) {
  input.value = storedInput;
}
const saveLocalStorage = () => {
  localStorage.setItem("city", input.value);
};
cityButton.addEventListener("click", saveLocalStorage);
