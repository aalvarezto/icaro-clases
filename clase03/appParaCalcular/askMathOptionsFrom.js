"use strict"

import askOptions from "./inquirer/askOptions.js"
import { composeAsync } from "./utils.js"

const label = "¿Qué operación matemática le gustaría realizar?"

const askMathOptionsFrom = composeAsync(askOptions(label), Object.keys)

export default askMathOptionsFrom
