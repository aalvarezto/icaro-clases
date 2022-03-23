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

		option =
			option === "sumar"
				? await doMath(option)
				: option === "restar"
				? await doMath(option)
				: option === "multiplicar"
				? await doMath(option)
				: option === "dividir"
				? await doMath(option)
				: "salir"

		clearConsoleAndDisplay()
	} while (option !== "salir")
}

export { hacerMatematicaCon }
