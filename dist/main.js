/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('Test');\n\nasync function getWeather() {\n  try {\n    const response = await fetch(\n      'http://api.openweathermap.org/data/2.5/weather?q=Sunrise&appid=3833c6d79e4ea95a0cd4c11bdfcd0b3d',\n      { mode: 'cors' }\n    );\n    const responseJSON = await response.json();\n    const weather = responseJSON.main.temp;\n    console.log(`Kelvin = ${weather}`);\n    console.log(`Fahrenheit = ${Math.round(kelvinToFahrenheit(weather))}`);\n    console.log(`Celcius = ${Math.round(kelvinToCelcius(weather))}`);\n  } catch (error) {\n    console.log('error');\n  }\n}\n\nfunction kelvinToFahrenheit(kelvin) {\n  return (9 / 5) * (kelvin - 273.15) + 32;\n}\n\nfunction kelvinToCelcius(kelvin) {\n  return kelvin - 273.15;\n}\n\ngetWeather();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;