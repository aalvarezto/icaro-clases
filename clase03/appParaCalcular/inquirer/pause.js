"use strict"

import _createPrompt from "./_createPrompt.js"
import chalk from "chalk"

const { green } = chalk

const pause = _createPrompt({
	type: "input",
	name: "enter",
	message: `Presione ${green("ENTER")} para continuar.`,
})

export { pause }
