const apikey = "7be45e222687943f32e34a66e856458a";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  let response = await fetch(apiurl + city + ` &appid=${apikey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C°F";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if(data.weather[0].main == "Clouds"){
    weathericon.src = "weather\clouds.png"
  }
  if(data.weather[0].main == "Clear"){
    weathericon.src = "clear.png"
  }
  if(data.weather[0].main == "Rain"){
    weathericon.src = "rain.png"
  }
  if(data.weather[0].main == "Drizzle"){
    weathericon.src = "drizzle.png"
  }
  if(data.weather[0].main == "Mist"){
    weathericon.src = "mist.png"
  }
  if(data.weather[0].main == "Snow"){
    weathericon.src = "snow.png"
  }

  }

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);

})