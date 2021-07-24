export {
  getWeatherInfo,
  kelvinToFahrenheit,
  kelvinToCelcius,
  convertTo24Hr,
  convertToMPH,
  degToDirection,
};

async function getWeatherInfo(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3833c6d79e4ea95a0cd4c11bdfcd0b3d`,
      { mode: 'cors' }
    );
    const responseJSON = await response.json();
    const currentWeather = responseJSON.main.temp;
    console.log(responseJSON);
    //console.log(responseJSON);
    /*console.log(`Kelvin = ${currentWeather}`);
    console.log(
      `Fahrenheit = ${Math.round(kelvinToFahrenheit(currentWeather))}`
    );
    console.log(`Celcius = ${Math.round(kelvinToCelcius(currentWeather))}`);
    console.log(`High = ${responseJSON.main.temp_max}`);
    console.log(`Low = ${responseJSON.main.temp_min}`);
    console.log(`Feels Like = ${responseJSON.main.feels_like}`);
    console.log(`Wind Speed = ${convertToMPH(responseJSON.wind.speed)}`);
    console.log(`Wind Direction = ${degToDirection(responseJSON.wind.deg)}`);
    console.log(`Sunrise = ${convertTo24Hr(responseJSON.sys.sunrise)}`);
    console.log(`Sunset = ${convertTo24Hr(responseJSON.sys.sunset)}`);
    console.log(`Description = ${responseJSON.weather[0].description}`);
*/
    const weatherInfo = {
      weather: currentWeather,
      high: responseJSON.main.temp_max,
      low: responseJSON.main.temp_min,
      feels_like: responseJSON.main.feels_like,
      wind_speed: responseJSON.wind.speed,
      wind_direction: responseJSON.wind.deg,
      sunrise: responseJSON.sys.sunrise,
      sunset: responseJSON.sys.sunset,
      name: responseJSON.name,
      description: responseJSON.weather[0].description,
      main: responseJSON.weather[0].main,
    };
    return weatherInfo;
  } catch (error) {
    console.log('Error getting weather information');
  }
}

function kelvinToFahrenheit(kelvin) {
  return Math.round((9 / 5) * (kelvin - 273.15) + 32);
}

function kelvinToCelcius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function convertTo24Hr(UTC) {
  const date = new Date(UTC * 1000);
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes}`;
}

function convertToMPH(mps) {
  return mps * 2.237;
}

function degToDirection(deg) {
  if (deg > 11.25 && deg < 56.25) {
    return 'NE';
  } else if (deg > 78.75 && deg < 101.25) {
    return 'E';
  } else if (deg > 101.25 && deg < 146.25) {
    return 'SE';
  } else if (deg > 146.25 && deg < 191.25) {
    return 'S';
  } else if (deg > 191.25 && deg < 236.25) {
    return 'SW';
  } else if (deg > 236.25 && deg < 281.25) {
    return 'W';
  } else if (deg > 281.25 && deg < 326.25) {
    return 'NW';
  } else {
    return 'N';
  }
}
