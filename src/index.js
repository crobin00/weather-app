console.log('Test');

async function getWeather() {
  try {
    const response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Sunrise&appid=3833c6d79e4ea95a0cd4c11bdfcd0b3d',
      { mode: 'cors' }
    );
    const responseJSON = await response.json();
    const weather = responseJSON.main.temp;
    console.log(`Kelvin = ${weather}`);
    console.log(`Fahrenheit = ${Math.round(kelvinToFahrenheit(weather))}`);
    console.log(`Celcius = ${Math.round(kelvinToCelcius(weather))}`);
  } catch (error) {
    console.log('error');
  }
}

function kelvinToFahrenheit(kelvin) {
  return (9 / 5) * (kelvin - 273.15) + 32;
}

function kelvinToCelcius(kelvin) {
  return kelvin - 273.15;
}

getWeather();
