"use strict"

import { askMathOptions } from "./askMathOptions.js"
import { clearConsoleAndDisplay } from "./clearConsoleAndDisplay.js"
import { doMathFrom } from "./doMathFrom.js"

clearConsoleAndDisplay()

const hacerMatematicaCon = async operadores => {
	let option

	const doMath = doMathFrom(operadores)

	do {
		clearConsoleAndDisplay()

		option = await askMathOptions()

		option === "salir" || (await doMath(option))

		clearConsoleAndDisplay()
	} while (option !== "salir")
}

export { hacerMatematicaCon }
