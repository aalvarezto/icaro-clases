"use strict"

const processMathFunc = mathFn => x => mathFn.apply(null, x)

export default processMathFunc
