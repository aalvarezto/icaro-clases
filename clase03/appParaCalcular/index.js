"use strict"

import clearConsoleAndDisplay from "./clearConsoleAndDisplay.js"
import forMathWith from "./forMathWith.js"

const hacerMatematicaCon = async operadores =>
	clearConsoleAndDisplay() &&
	(await forMathWith(operadores)) !== [] &&
	hacerMatematicaCon(operadores)

export { hacerMatematicaCon }
