"use strict"

import chalk from "chalk"
import _createPrompt from "./_createPrompt.js"
import { capFirst } from "../utils.js"

const { green, blue } = chalk

const askOptions = options =>
	_createPrompt({
		type: "list",
		name: "option",
		message: "¿Qué operación matemática le gustaría realizar?",
		choices: options.map(([option, index]) => ({
			value: option,
			name: `${green(index ? index : blue(0))}. ${capFirst(option)}`,
		})),
	})

export { askOptions }
