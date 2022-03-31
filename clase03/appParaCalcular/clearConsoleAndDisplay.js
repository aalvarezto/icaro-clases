"use strict"

import chalk from "chalk"

const { green } = chalk

const clearConsoleAndDisplay = (option = "") =>
	console.clear() ||
	!option ||
	console.log(`Operación: ${green(option)} \n`) ||
	option

export default clearConsoleAndDisplay
