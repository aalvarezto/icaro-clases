"use strict"

import { askOptions } from "./inquirer/askOptions.js"

const askMathOptions = askOptions(
	"¿Qué operación matemática le gustaría realizar?",
	[
		["sumar", 1],
		["restar", 2],
		["multiplicar", 3],
		["dividir", 4],
	]
)

export { askMathOptions }
