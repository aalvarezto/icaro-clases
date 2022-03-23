"use strict"

import { askOptions } from "./inquirer/askOptions.js"

const askMathOptions = askOptions([
	["sumar", 1],
	["restar", 2],
	["multiplicar", 3],
	["dividir", 4],
	["salir", 0],
])

export { askMathOptions }
