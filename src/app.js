function formatDate(timestapm) {
  let date = new Date(timestapm);

  let hours = date.getHours();

  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    hours = "0" + minutes;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];

  return `${day}${hours}:${minutes}`;
}
function showCTD(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let citynameElement = document.querySelector("#cityname");
  let descritionElement = document.querySelector("#descrition");
  let HumidityElement = document.querySelector("#Humidity");
  let WindElement = document.querySelector("#Wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  citynameElement.innerHTML = response.data.name;
  Celsiustemperature= response.data.main.temp;
temperatureElement.innerHTML = Math.round(Celsiustemperature);
  descritionElement.innerHTML = response.data.weather[0].description;
  HumidityElement.innerHTML = response.data.main.humidity;
  WindElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let Fahreheirtemperature = (Celsiustemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(Fahreheirtemperature);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(Celsiustemperature);
}

function searchCity(cityname) {
  let apiKey = "435bb05a3bd8ac1e2c4d7c0df7d0cd4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCTD);
}

function search(event) {
  event.preventDefault();
  let citynameInputElement = document.querySelector("#search-input");
  searchCity(citynameInputElement.value);
}
searchCity("New York");
let Celsiustemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("click", search);

let FahrenheitLink = document.querySelector("#fahrenheit-link");
FahrenheitLink.addEventListener("click", showFahrenheitTemp);

let CelsiusLink = document.querySelector("#cilsius-link");
CelsiusLink.addEventListener("click", showCelsiusTemp);
