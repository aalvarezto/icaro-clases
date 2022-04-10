"use strict"

const fs = require("fs")

const escribir = (path, tareasParseadas) =>
	fs.writeFileSync(path, JSON.stringify(tareasParseadas, null, 4))

module.exports = {
	escribir,
}
