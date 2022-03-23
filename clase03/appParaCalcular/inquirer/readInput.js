"use strict"

import _createPrompt from "./_createPrompt.js"

const readInput = (inputLable, validation = () => true) =>
	_createPrompt({
		type: "input",
		name: "city",
		message: `${inputLable}`,
		validate: validation,
	})()

export { readInput }
