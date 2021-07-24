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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherInfo\": () => (/* binding */ getWeatherInfo),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit),\n/* harmony export */   \"kelvinToCelcius\": () => (/* binding */ kelvinToCelcius),\n/* harmony export */   \"convertTo24Hr\": () => (/* binding */ convertTo24Hr),\n/* harmony export */   \"convertToMPH\": () => (/* binding */ convertToMPH),\n/* harmony export */   \"degToDirection\": () => (/* binding */ degToDirection)\n/* harmony export */ });\n\n\nasync function getWeatherInfo(city) {\n  try {\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3833c6d79e4ea95a0cd4c11bdfcd0b3d`,\n      { mode: 'cors' }\n    );\n    const responseJSON = await response.json();\n    const currentWeather = responseJSON.main.temp;\n    console.log(responseJSON);\n    console.log(`Kelvin = ${currentWeather}`);\n    console.log(\n      `Fahrenheit = ${Math.round(kelvinToFahrenheit(currentWeather))}`\n    );\n    console.log(`Celcius = ${Math.round(kelvinToCelcius(currentWeather))}`);\n    console.log(`High = ${responseJSON.main.temp_max}`);\n    console.log(`Low = ${responseJSON.main.temp_min}`);\n    console.log(`Feels Like = ${responseJSON.main.feels_like}`);\n    console.log(`Wind Speed = ${convertToMPH(responseJSON.wind.speed)}`);\n    console.log(`Wind Direction = ${degToDirection(responseJSON.wind.deg)}`);\n    console.log(`Sunrise = ${convertTo24Hr(responseJSON.sys.sunrise)}`);\n    console.log(`Sunset = ${convertTo24Hr(responseJSON.sys.sunset)}`);\n    console.log(`Description = ${responseJSON.weather[0].description}`);\n\n    const weatherInfo = {\n      weather: currentWeather,\n      high: responseJSON.main.temp_max,\n      low: responseJSON.main.temp_min,\n      feels_like: responseJSON.main.feels_like,\n      wind_speed: responseJSON.wind.deg,\n      wind_direction: responseJSON.wind.deg,\n      sunrise: responseJSON.sys.sunrise,\n      sunset: responseJSON.sys.sunset,\n    };\n    return weatherInfo;\n  } catch (error) {\n    console.log('Error getting weather information');\n  }\n}\n\nfunction kelvinToFahrenheit(kelvin) {\n  return (9 / 5) * (kelvin - 273.15) + 32;\n}\n\nfunction kelvinToCelcius(kelvin) {\n  return kelvin - 273.15;\n}\n\nfunction convertTo24Hr(UTC) {\n  const date = new Date(UTC * 1000);\n  const hour = date.getHours();\n  const minutes = date.getMinutes();\n\n  return `${hour}:${minutes}`;\n}\n\nfunction convertToMPH(mps) {\n  return mps * 2.237;\n}\n\nfunction degToDirection(deg) {\n  if (deg > 11.25 && deg < 56.25) {\n    return 'NE';\n  } else if (deg > 78.75 && deg < 101.25) {\n    return 'E';\n  } else if (deg > 101.25 && deg < 146.25) {\n    return 'SE';\n  } else if (deg > 146.25 && deg < 191.25) {\n    return 'S';\n  } else if (deg > 191.25 && deg < 236.25) {\n    return 'SW';\n  } else if (deg > 236.25 && deg < 281.25) {\n    return 'W';\n  } else if (deg > 281.25 && deg < 326.25) {\n    return 'NW';\n  } else {\n    return 'N';\n  }\n}\n\n//getWeatherInfo(prompt('Enter a city'));\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;