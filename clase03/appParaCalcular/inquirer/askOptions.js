"use strict"

import chalk from "chalk"
import _createPrompt from "./_createPrompt.js"
import { capFirst } from "../utils.js"

const { green, blue } = chalk

const askOptions = (label, options) =>
	_createPrompt({
		type: "list",
		name: "option",
		message: label,
		choices: [...options, ["salir", 0]].map(([option, index]) => ({
			value: option,
			name: `${green(index ? index : blue(0))}. ${capFirst(option)}`,
		})),
	})

export { askOptions }
