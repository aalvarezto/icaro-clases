"use strict"

const fs = require("fs")

const leer = path => {
	const tareasString = fs.readFileSync(path).toString()
	const tareasObj = JSON.parse(tareasString)

	return tareasObj
}

module.exports = {
	leer,
}
