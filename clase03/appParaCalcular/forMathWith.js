"use strict"

import askMathOptionsFrom from "./askMathOptionsFrom.js"
import doMathFrom from "./doMathFrom.js"
import { composeAsync } from "./utils.js"

const forMathWith = x => composeAsync(doMathFrom(x), askMathOptionsFrom)(x)

export default forMathWith
