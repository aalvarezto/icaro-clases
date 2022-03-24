"use strict"

import { askOptions } from "./inquirer/askOptions.js"

const askMathOptions = operations =>
	askOptions("¿Qué operación matemática le gustaría realizar?", operations)()

export { askMathOptions }
