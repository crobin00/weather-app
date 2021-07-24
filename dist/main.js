/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-info.js */ \"./src/weather-info.js\");\n\n\nconst body = document.querySelector('body');\nconst search = document.querySelector('#search');\nconst searchButton = document.querySelector('.fa-search');\nconst swapTempButton = document.querySelector('.swap');\nconst city = document.querySelector('.city');\nconst temperature = document.querySelector('.temperature');\nconst description = document.querySelector('.description');\nconst high = document.querySelector('.high');\nconst feelsLike = document.querySelector('.feels-like');\nconst sunrise = document.querySelector('.sunrise');\nconst low = document.querySelector('.low');\nconst wind = document.querySelector('.wind');\nconst sunset = document.querySelector('.sunset');\nlet weatherInfo = null;\nlet isFahrenheit = true;\n\nsearch.addEventListener('keypress', (e) => {\n  if (e.code == 'Enter') {\n    getInputValue();\n    e.preventDefault();\n  }\n});\n\nsearchButton.addEventListener('click', (e) => {\n  getInputValue();\n});\n\nswapTempButton.addEventListener('click', (e) => {\n  if (swapTempButton.innerText == 'F') {\n    swapTempButton.innerText = 'C';\n    isFahrenheit = false;\n    updateDOM(weatherInfo);\n  } else {\n    swapTempButton.innerText = 'F';\n    isFahrenheit = true;\n    updateDOM(weatherInfo);\n  }\n});\n\nasync function getInputValue() {\n  console.log(await (0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherInfo)(search.value));\n  weatherInfo = await (0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherInfo)(search.value);\n  updateDOM(weatherInfo);\n  descriptionToGif(weatherInfo.main);\n}\n\nfunction updateDOM(weatherInfo) {\n  city.innerText = `${weatherInfo.name}`;\n  description.innerText = `${capatilizeDescription(weatherInfo.description)}`;\n  wind.innerText = `Wind Speed: ${weatherInfo.wind_speed} ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.degToDirection)(\n    weatherInfo.wind_direction\n  )}`;\n  sunrise.innerText = `Sunrise: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.convertTo24Hr)(weatherInfo.sunrise)}`;\n  sunset.innerText = `Sunset: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.convertTo24Hr)(weatherInfo.sunset)}`;\n\n  if (isFahrenheit) {\n    temperature.innerText = `${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(weatherInfo.weather)}° F`;\n    high.innerText = `High: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(weatherInfo.high)}° F`;\n    low.innerText = `Low: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(weatherInfo.low)}° F`;\n    feelsLike.innerText = `Feels Like: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(\n      weatherInfo.feels_like\n    )}° F`;\n  }\n  if (!isFahrenheit) {\n    temperature.innerText = `${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(weatherInfo.weather)}° C`;\n    high.innerText = `High: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(weatherInfo.high)}° C`;\n    low.innerText = `Low: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(weatherInfo.low)}° C`;\n    feelsLike.innerText = `Feels Like: ${(0,_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(\n      weatherInfo.feels_like\n    )}° C`;\n  }\n}\n\nasync function descriptionToGif(desc) {\n  try {\n    //console.log(responseJSON);\n    if (desc == 'Rain') {\n      const response = await fetch(\n        `https://api.giphy.com/v1/gifs/dI3D3BWfDub0Q?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,\n        { mode: 'cors' }\n      );\n      const responseJSON = await response.json();\n      body.style.background = `url(${responseJSON.data.images.original.url})`;\n      body.style.backgroundRepeat = 'no-repeat';\n      body.style.backgroundSize = 'cover';\n      console.log('rain');\n    } else if (desc == 'Thunder') {\n      console.log('thunder');\n    } else if (desc == 'Drizzle') {\n      const response = await fetch(\n        `https://api.giphy.com/v1/gifs/xT9GEOg09OuResnZ6g?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,\n        { mode: 'cors' }\n      );\n      const responseJSON = await response.json();\n      body.style.background = `url(${responseJSON.data.images.original.url})`;\n      body.style.backgroundRepeat = 'no-repeat';\n      body.style.backgroundSize = 'cover';\n      console.log('drizzle');\n    } else if (desc == 'Snow') {\n      const response = await fetch(\n        `https://api.giphy.com/v1/gifs/Xi2Xu0MejhsUo?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,\n        { mode: 'cors' }\n      );\n      const responseJSON = await response.json();\n      body.style.background = `url(${responseJSON.data.images.original.url})`;\n      body.style.backgroundRepeat = 'no-repeat';\n      body.style.backgroundSize = 'cover';\n      console.log('snow');\n    } else if (desc == 'Clear') {\n      const response = await fetch(\n        `https://api.giphy.com/v1/gifs/u01ioCe6G8URG?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,\n        { mode: 'cors' }\n      );\n      const responseJSON = await response.json();\n      body.style.background = `url(${responseJSON.data.images.original.url})`;\n      body.style.backgroundRepeat = 'no-repeat';\n      body.style.backgroundSize = 'cover';\n      console.log('clear');\n    } else if (desc == 'Clouds') {\n      const response = await fetch(\n        `https://api.giphy.com/v1/gifs/qq5gwamAHVofm?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,\n        { mode: 'cors' }\n      );\n      const responseJSON = await response.json();\n      body.style.background = `url(${responseJSON.data.images.original.url})`;\n      body.style.backgroundRepeat = 'no-repeat';\n      body.style.backgroundSize = 'cover';\n      console.log('clouds');\n    } else {\n      const response = await fetch(\n        `https://api.giphy.com/v1/gifs/BiKbcxCt1y49dgtmzo?api_key=koP7TY6OFHNHq72ImPPjEvbtpi31CC5X`,\n        { mode: 'cors' }\n      );\n      const responseJSON = await response.json();\n      body.style.background = `url(${responseJSON.data.images.original.url})`;\n      body.style.backgroundRepeat = 'no-repeat';\n      body.style.backgroundSize = 'cover';\n      console.log('atmosphere');\n    }\n  } catch (error) {\n    console.log('Error loading gif');\n  }\n}\n\nfunction capatilizeDescription(desc) {\n  return desc\n    .split(' ')\n    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))\n    .join(' ');\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-info.js":
/*!*****************************!*\
  !*** ./src/weather-info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherInfo\": () => (/* binding */ getWeatherInfo),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit),\n/* harmony export */   \"kelvinToCelcius\": () => (/* binding */ kelvinToCelcius),\n/* harmony export */   \"convertTo24Hr\": () => (/* binding */ convertTo24Hr),\n/* harmony export */   \"convertToMPH\": () => (/* binding */ convertToMPH),\n/* harmony export */   \"degToDirection\": () => (/* binding */ degToDirection)\n/* harmony export */ });\n\n\nasync function getWeatherInfo(city) {\n  try {\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3833c6d79e4ea95a0cd4c11bdfcd0b3d`,\n      { mode: 'cors' }\n    );\n    const responseJSON = await response.json();\n    const currentWeather = responseJSON.main.temp;\n    console.log(responseJSON);\n    //console.log(responseJSON);\n    /*console.log(`Kelvin = ${currentWeather}`);\n    console.log(\n      `Fahrenheit = ${Math.round(kelvinToFahrenheit(currentWeather))}`\n    );\n    console.log(`Celcius = ${Math.round(kelvinToCelcius(currentWeather))}`);\n    console.log(`High = ${responseJSON.main.temp_max}`);\n    console.log(`Low = ${responseJSON.main.temp_min}`);\n    console.log(`Feels Like = ${responseJSON.main.feels_like}`);\n    console.log(`Wind Speed = ${convertToMPH(responseJSON.wind.speed)}`);\n    console.log(`Wind Direction = ${degToDirection(responseJSON.wind.deg)}`);\n    console.log(`Sunrise = ${convertTo24Hr(responseJSON.sys.sunrise)}`);\n    console.log(`Sunset = ${convertTo24Hr(responseJSON.sys.sunset)}`);\n    console.log(`Description = ${responseJSON.weather[0].description}`);\n*/\n    const weatherInfo = {\n      weather: currentWeather,\n      high: responseJSON.main.temp_max,\n      low: responseJSON.main.temp_min,\n      feels_like: responseJSON.main.feels_like,\n      wind_speed: responseJSON.wind.speed,\n      wind_direction: responseJSON.wind.deg,\n      sunrise: responseJSON.sys.sunrise,\n      sunset: responseJSON.sys.sunset,\n      name: responseJSON.name,\n      description: responseJSON.weather[0].description,\n      main: responseJSON.weather[0].main,\n    };\n    return weatherInfo;\n  } catch (error) {\n    console.log('Error getting weather information');\n  }\n}\n\nfunction kelvinToFahrenheit(kelvin) {\n  return Math.round((9 / 5) * (kelvin - 273.15) + 32);\n}\n\nfunction kelvinToCelcius(kelvin) {\n  return Math.round(kelvin - 273.15);\n}\n\nfunction convertTo24Hr(UTC) {\n  const date = new Date(UTC * 1000);\n  const hour = date.getHours();\n  const minutes = date.getMinutes();\n\n  return `${hour}:${minutes}`;\n}\n\nfunction convertToMPH(mps) {\n  return mps * 2.237;\n}\n\nfunction degToDirection(deg) {\n  if (deg > 11.25 && deg < 56.25) {\n    return 'NE';\n  } else if (deg > 78.75 && deg < 101.25) {\n    return 'E';\n  } else if (deg > 101.25 && deg < 146.25) {\n    return 'SE';\n  } else if (deg > 146.25 && deg < 191.25) {\n    return 'S';\n  } else if (deg > 191.25 && deg < 236.25) {\n    return 'SW';\n  } else if (deg > 236.25 && deg < 281.25) {\n    return 'W';\n  } else if (deg > 281.25 && deg < 326.25) {\n    return 'NW';\n  } else {\n    return 'N';\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/weather-info.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;