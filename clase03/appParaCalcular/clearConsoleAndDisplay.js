"use strict"

import chalk from "chalk"

const { green } = chalk

const clearConsoleAndDisplay = (x = "") =>
	console.clear() || !x || console.log(`Operación: ${green(x)} \n`) || x

export { clearConsoleAndDisplay }
