"use strict"

import chalk from "chalk"
import _createPrompt from "./_createPrompt.js"
import { capFirst } from "../utils.js"

const { green, blue } = chalk

const toOptionIndexTuple = (x, i) => [x, i + 1]

const toChangeIndexColor = ([x, i]) => [x, i ? green(i) : blue(i)]

const toValueNameTuple = ([x, i]) => [x, `${i}. ${capFirst(x)}`]

const askOptions = label => options =>
	_createPrompt({
		type: "list",
		name: "option",
		message: label,
		choices: options
			.map(toOptionIndexTuple)
			// .concat([["salir", 0]])
			.map(toChangeIndexColor)
			.map(toValueNameTuple)
			.map(([value, name]) => ({ value, name })),
	})()

export default askOptions
