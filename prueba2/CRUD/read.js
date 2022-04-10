"use strict"

const fs = require("fs")

const leer = path => JSON.parse(fs.readFileSync(path).toString())

module.exports = {
	leer,
}
