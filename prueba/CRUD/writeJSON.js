"use strict"

const fs = require("fs")

const escribir = (path, tareasParseadas) => {
	const tareasString = JSON.stringify(tareasParseadas, null, 4)

	fs.writeFileSync(path, tareasString)

	return `Se escribió correctamente en el archivo ubicado en ${path}.`
}

module.exports = {
	escribir,
}
