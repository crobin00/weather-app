import {
  getWeatherInfo,
  kelvinToFahrenheit,
  kelvinToCelcius,
  convertTo24Hr,
  convertToMPH,
  degToDirection,
} from './weather-info.js';

const body = document.querySelector('body');
const search = document.querySelector('#search');
const searchButton = document.querySelector('.fa-search');
const swapTempButton = document.querySelector('.swap');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const high = document.querySelector('.high');
const feelsLike = document.querySelector('.feels-like');
const sunrise = document.querySelector('.sunrise');
const low = document.querySelector('.low');
const wind = document.querySelector('.wind');
const sunset = document.querySelector('.sunset');
let weatherInfo = null;
let isFahrenheit = true;

search.addEventListener('keypress', (e) => {
  if (e.code == 'Enter') {
    getInputValue();
    e.preventDefault();
  }
});

searchButton.addEventListener('click', (e) => {
  getInputValue();
});

swapTempButton.addEventListener('click', (e) => {
  if (swapTempButton.innerText == 'F') {
    swapTempButton.innerText = 'C';
    isFahrenheit = false;
    updateDOM(weatherInfo);
  } else {
    swapTempButton.innerText = 'F';
    isFahrenheit = true;
    updateDOM(weatherInfo);
  }
});

async function getInputValue() {
  console.log(await getWeatherInfo(search.value));
  weatherInfo = await getWeatherInfo(search.value);
  updateDOM(weatherInfo);
  descriptionToGif(weatherInfo.main);
}

function updateDOM(weatherInfo) {
  city.innerText = `${weatherInfo.name}`;
  description.innerText = `${capatilizeDescription(weatherInfo.description)}`;
  wind.innerText = `Wind Speed: ${weatherInfo.wind_speed} ${degToDirection(
    weatherInfo.wind_direction
  )}`;
  sunrise.innerText = `Sunrise: ${convertTo24Hr(weatherInfo.sunrise)}`;
  sunset.innerText = `Sunset: ${convertTo24Hr(weatherInfo.sunset)}`;

  if (isFahrenheit) {
    temperature.innerText = `${kelvinToFahrenheit(weatherInfo.weather)}° F`;
    high.innerText = `High: ${kelvinToFahrenheit(weatherInfo.high)}° F`;
    low.innerText = `Low: ${kelvinToFahrenheit(weatherInfo.low)}° F`;
    feelsLike.innerText = `Feels Like: ${kelvinToFahrenheit(
      weatherInfo.feels_like
    )}° F`;
  }
  if (!isFahrenheit) {
    temperature.innerText = `${kelvinToCelcius(weatherInfo.weather)}° C`;
    high.innerText = `High: ${kelvinToCelcius(weatherInfo.high)}° C`;
    low.innerText = `Low: ${kelvinToCelcius(weatherInfo.low)}° C`;
    feelsLike.innerText = `Feels Like: ${kelvinToCelcius(
      weatherInfo.feels_like
    )}° C`;
  }
}

async function descriptionToGif(desc) {
  try {
    //console.log(responseJSON);
    if (desc == 'Rain') {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/dI3D3BWfDub0Q?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,
        { mode: 'cors' }
      );
      const responseJSON = await response.json();
      body.style.background = `url(${responseJSON.data.images.original.url})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      console.log('rain');
    } else if (desc == 'Thunder') {
      console.log('thunder');
    } else if (desc == 'Drizzle') {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/xT9GEOg09OuResnZ6g?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,
        { mode: 'cors' }
      );
      const responseJSON = await response.json();
      body.style.background = `url(${responseJSON.data.images.original.url})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      console.log('drizzle');
    } else if (desc == 'Snow') {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/Xi2Xu0MejhsUo?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,
        { mode: 'cors' }
      );
      const responseJSON = await response.json();
      body.style.background = `url(${responseJSON.data.images.original.url})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      console.log('snow');
    } else if (desc == 'Clear') {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/u01ioCe6G8URG?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,
        { mode: 'cors' }
      );
      const responseJSON = await response.json();
      body.style.background = `url(${responseJSON.data.images.original.url})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      console.log('clear');
    } else if (desc == 'Clouds') {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/qq5gwamAHVofm?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,
        { mode: 'cors' }
      );
      const responseJSON = await response.json();
      body.style.background = `url(${responseJSON.data.images.original.url})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      console.log('clouds');
    } else {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/BiKbcxCt1y49dgtmzo?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,
        { mode: 'cors' }
      );
      const responseJSON = await response.json();
      body.style.background = `url(${responseJSON.data.images.original.url})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      console.log('atmosphere');
    }
  } catch (error) {
    console.log('Error loading gif');
  }
}

function capatilizeDescription(desc) {
  return desc
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}
