function Date(response){
let date= new Date(timestamp);
let hours=date.getHours();
let minutes=date.getMinutes();
  if (hours < 10) {
  hours = "0" + hours;
}
let minutes = now.getMinutes();
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
let day=days[date.getDay()];
return`${day}${hours}:${minutes}`;
}
function showCTD(response) {
  let temperatureElement = document.querySelector("#temperature");
  let citynameElement = document.querySelector("#cityname");
  let descritionElement = document.querySelector("#descrition");
  let PrecipitationElement = document.querySelector("#Precipitation");
  let HumidityElement = document.querySelector("#Humidity");
  let WindElement = document.querySelector("#Wind");
  let dateElement = document.querySelector("#date");
  citynameElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descritionElement.innerHTML = response.data.weather[0].description;
  HumidityElement.innerHTML = response.data.main.humidity;
  WindElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML =  Date(response.data.date*1000);
  console.log(response.data);
}
let apiKey = "435bb05a3bd8ac1e2c4d7c0df7d0cd4b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metic`;
axios.get(apiUrl).then(showCTD);

function searchCity(cityname) {
  let apiKey = "435bb05a3bd8ac1e2c4d7c0df7d0cd4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metic`;
  axios.get(apiUrl).then(showCTD);
}

function search(event) {
  event.preventDefault();
  let cityname = document.querySelector("#search-input").value;
  searchCity(cityname);
}
let button = document.querySelector("#search-form");
button.addEventListener("click", search);

function searchlocation(position) {
  let apiKey = "435bb05a3bd8ac1e2c4d7c0df7d0cd4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metic`;
  axios.get(apiUrl).then(showCTD);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchlocation);
}
