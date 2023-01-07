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

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const selectPosition = __webpack_require__(/*! ./selectPosition */ \"./src/selectPosition.js\");\nconst Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\nfunction GameBoard() {\n  this.ships = [\n    new Ship(4),\n    new Ship(3),\n    new Ship(3),\n    new Ship(2),\n    new Ship(2),\n    new Ship(2),\n    new Ship(1),\n    new Ship(1),\n    new Ship(1),\n    new Ship(1),\n  ];\n  this.isDestroyed = false;\n  this.missedShots = [];\n  this.allTakenPosition = [];\n}\n\nGameBoard.prototype.placeShips = function () {\n  this.ships.forEach((ship) => {\n    let selectedOption = selectPosition(ship.length, this);\n    ship.addPosition(selectedOption);\n    ship.position.map((positionsOfThisShip) => {\n      this.ships.map((everyShip) => {\n        everyShip.position.map((everyShipPosition) => {\n          if (everyShipPosition === positionsOfThisShip) {\n            found = true;\n          }\n        });\n      });\n    });\n  });\n  this.ships.map((ship) => {\n    ship.position.map((eachPosition) => {\n      this.allTakenPosition.push(eachPosition);\n    });\n  });\n};\n\nGameBoard.prototype.receiveShots = function (position) {\n  let checkIfMissedShot = true;\n  this.allTakenPosition.map((eachPosition, id) => {\n    if (eachPosition === position) {\n      checkIfMissedShot = false;\n      this.allTakenPosition.splice(id, 1);\n    }\n  });\n\n  if (checkIfMissedShot === true) {\n    this.missedShots.push(position);\n  } else {\n    this.ships.map((ship) => {\n      if (ship.position.indexOf(position) !== -1) {\n        ship.isHit();\n      }\n    });\n  }\n  return checkIfMissedShot\n};\n\nGameBoard.prototype.hasAllShipsBeenSunk = function () {\n  if (this.allTakenPosition.length === 0) {\n    return true;\n  }\n  return false;\n};\n\nmodule.exports = GameBoard;\n\n\n//# sourceURL=webpack://battleship/./src/GameBoard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

eval("function Player(value, gameBoard) {\n  this.type = value;\n  this.gameBoard = gameBoard;\n  this.attackedPosition = [];\n}\n\nPlayer.prototype.Attack = function (value) {\n  if (this.type !== \"computer\") {\n    this.attackedPosition.push(value);\n  } else {\n    let horOpt = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n    let horChoice = Math.floor(Math.random() * 10);\n    let vertChoice = Math.ceil(Math.random() * 10);\n    value = horOpt[horChoice] + vertChoice;\n  }\n  return value;\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function Ship(value) {\n  this.length = value;\n  this.position = [];\n  this.hits = 0;\n  this.isSunk = false;\n}\n\nShip.prototype.addPosition = function (array) {\n  if (array.length !== this.length) {\n    return \"Please choose compatible position\";\n  }\n  this.position = [...array];\n  return array;\n};\n\nShip.prototype.isHit = function () {\n    this.hits++\n  return this.hits\n};\n\nShip.prototype.checkIfSunk = function (){\n    if(this.length === this.hits){\n        this.isSunk = true\n        return true\n    }\n    return false\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Player__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GameBoard__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst leftBoard = document.querySelector(\".left\");\nconst rightBoard = document.querySelector(\".right\");\nconst alphabet = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\nlet turn = false;\n\n// GamePlay\nlet playerBoard = new (_GameBoard__WEBPACK_IMPORTED_MODULE_1___default())();\nlet player1 = new (_Player__WEBPACK_IMPORTED_MODULE_0___default())(\"tony\", playerBoard);\n\nlet computerBoard = new (_GameBoard__WEBPACK_IMPORTED_MODULE_1___default())();\nlet computer = new (_Player__WEBPACK_IMPORTED_MODULE_0___default())(\"computer\", computerBoard);\n\ncomputerBoard.placeShips();\nplayerBoard.placeShips();\n\nlet computerPositions = computerBoard.allTakenPosition;\nlet playerPosition = playerBoard.allTakenPosition;\n\n// User interface\nfor (let i = 0; i < 10; i++) {\n  for (let j = 1; j <= 10; j++) {\n    const square = document.createElement(\"div\");\n    square.className = \"left-grid\";\n    square.id = String(i) + \"_\" + String(j);\n    if (playerPosition.indexOf(alphabet[String(i)] + String(j)) !== -1) {\n      square.style.backgroundColor = \"green\";\n      square.addEventListener(\"click\", () => {\n        if (turn === true) {\n          square.style.backgroundColor = \"red\";\n        }\n      });\n    } else {\n      square.addEventListener(\"click\", () => {\n        if (turn === true) {\n          square.style.backgroundColor = \"black\";\n        }\n      });\n    }\n    leftBoard.append(square);\n  }\n}\n\nfor (let i = 0; i < 10; i++) {\n  for (let j = 1; j < 11; j++) {\n    const square = document.createElement(\"div\");\n    square.className = \"right-grid\";\n    square.id = String(i) + \"_\" + String(j);\n\n    if (computerPositions.indexOf(alphabet[String(i)] + String(j)) !== -1) {\n      square.addEventListener(\"click\", () => {\n        if (turn === false) {\n          square.style.backgroundColor = \"red\";\n          turn = false;\n        } else {\n          window.alert(\"Not your turn\");\n        }\n      });\n    } else {\n      square.addEventListener(\"click\", () => {\n        square.style.backgroundColor = \"black\";\n        // turn=true\n      });\n    }\n\n    rightBoard.append(square);\n  }\n}\n\n// Game turns\nconst leftBoardHandler = (e) => {\n  if (turn === true) {\n    let shot = e.target.id;\n    shot = alphabet[shot.split(\"_\")[0]] + shot.split(\"_\")[1];\n    playerBoard.receiveShots(shot);\n    if (playerPosition.indexOf(shot) !== -1) {\n      turn = false;\n    } else {\n      turn = true;\n    }\n  } else {\n    window.alert(\"Not your Board, please select from the second board\");\n  }\n  if (playerBoard.hasAllShipsBeenSunk()) {\n    window.alert(\"Computer won!\");\n    location.reload();\n  }\n};\n\nconst rightBoardHandler = (e) => {\n  if (turn === false) {\n    let shot = e.target.id;\n    shot = alphabet[shot.split(\"_\")[0]] + shot.split(\"_\")[1];\n    if (computerBoard.missedShots.indexOf(shot) === -1) {\n      let result = computerBoard.receiveShots(shot);\n      if (result === false) {\n        turn = false;\n      } else {\n        turn = true;\n        while (turn) {\n          let computerShot;\n          do {\n            computerShot = computer.Attack();\n          } while (playerBoard.missedShots.indexOf(computerShot) !== -1);\n          let computerResult = playerBoard.receiveShots(computerShot);\n          computerShot = computerShot.split(\"\");\n          computerShot =\n            alphabet.indexOf(computerShot[0]) + \"_\" + computerShot[1];\n          let squareShot = document.getElementById(`${computerShot}`);\n          squareShot.click();\n\n          if (computerResult === true) {\n            turn = false;\n          }\n        }\n      }\n    } else {\n      window.alert(\"Square already hit! Choose another\");\n    }\n  } else {\n    window.alert(\"Not your turn\");\n  }\n  if (computerBoard.hasAllShipsBeenSunk()) {\n    window.alert(\"You won!\");\n    location.reload();\n  }\n};\n\nrightBoard.addEventListener(\"click\", rightBoardHandler);\nleftBoard.addEventListener(\"click\", leftBoardHandler);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/selectPosition.js":
/*!*******************************!*\
  !*** ./src/selectPosition.js ***!
  \*******************************/
/***/ ((module) => {

eval("function selectPosition(length, gameBoard) {\n  let position = [];\n  let found = true;\n  //Direction option (0 for vertical and 1 for horizontal)\n  let directionOpt = Math.floor(Math.random() * 2);\n\n  let horOpt = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n  let horChoice = Math.floor(Math.random() * 10);\n  let vertChoice = Math.ceil(Math.random() * 10);\n\n  let secondChoice = 0,\n    thirdChoice = 0,\n    fourthChoice = 0;\n\n  //Vertical\n  if (directionOpt === 0) {\n    if (vertChoice < length) {\n      secondChoice = 1;\n    } else if (10 - vertChoice < length - 1) {\n      secondChoice = -1;\n    } else {\n      secondChoice = Math.round(Math.random()) ? 1 : -1;\n    }\n    thirdChoice = secondChoice < 0 ? -2 : 2;\n    fourthChoice = secondChoice < 0 ? -3 : 3;\n  } else {\n    // Horizontal\n    if (horChoice < length) {\n      secondChoice = 1;\n    } else if (9 - horChoice < length - 1) {\n      secondChoice = -1;\n    } else {\n      secondChoice = Math.round(Math.random()) ? 1 : -1;\n    }\n    thirdChoice = secondChoice < 0 ? -2 : 2;\n    fourthChoice = secondChoice < 0 ? -3 : 3;\n  }\n\n  switch (length) {\n    case 1:\n      position.push(horOpt[horChoice] + vertChoice);\n      break;\n\n    case 2:\n      position[0] = horOpt[horChoice] + vertChoice;\n      if (directionOpt === 0) {\n        position[1] = horOpt[horChoice] + (vertChoice + secondChoice);\n      } else {\n        position[1] = horOpt[horChoice + secondChoice] + vertChoice;\n      }\n      break;\n\n    case 3:\n      position[0] = horOpt[horChoice] + vertChoice;\n      if (directionOpt === 0) {\n        position[1] = horOpt[horChoice] + (vertChoice + secondChoice);\n        position[2] = horOpt[horChoice] + (vertChoice + thirdChoice);\n      } else {\n        position[1] = horOpt[horChoice + secondChoice] + vertChoice;\n        position[2] = horOpt[horChoice + thirdChoice] + vertChoice;\n      }\n      break;\n    case 4:\n      position[0] = horOpt[horChoice] + vertChoice;\n      if (directionOpt === 0) {\n        position[1] = horOpt[horChoice] + (vertChoice + secondChoice);\n        position[2] = horOpt[horChoice] + (vertChoice + thirdChoice);\n        position[3] = horOpt[horChoice] + (vertChoice + fourthChoice);\n      } else {\n        position[1] = horOpt[horChoice + secondChoice] + vertChoice;\n        position[2] = horOpt[horChoice + thirdChoice] + vertChoice;\n        position[3] = horOpt[horChoice + fourthChoice] + vertChoice;\n      }\n      break;\n\n    default:\n      break;\n  }\n\n  position.map((eachPosition) => {\n    gameBoard.ships.map((everyShip) => {\n      everyShip.position.map((singlePosition) => {\n        if (singlePosition === eachPosition) {\n          position = selectPosition(length, gameBoard);\n        }\n      });\n    });\n  });\n\n  return position;\n}\n\nmodule.exports = selectPosition;\n\n\n//# sourceURL=webpack://battleship/./src/selectPosition.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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