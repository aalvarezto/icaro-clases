"use strict"

import { readTwo } from "./readTwo.js"
import { composeAsync } from "./utils.js"
import { processMathFunc } from "./processMathFunc.js"
import { logResult } from "./logResult.js"
import { clearConsoleAndDisplay } from "./clearConsoleAndDisplay.js"

const doMathFrom = fnObj => op =>
	composeAsync(
		logResult,
		processMathFunc(fnObj[op]),
		readTwo,
		clearConsoleAndDisplay
	)(op)

export { doMathFrom }
