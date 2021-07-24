import {
  getWeatherInfo,
  kelvinToFahrenheit,
  kelvinToCelcius,
  convertTo24Hr,
  convertToMPH,
  degToDirection,
} from './index.js';

const search = document.querySelector('.search');
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

searchButton.addEventListener('click', (e) => {
  console.log('search');
});
