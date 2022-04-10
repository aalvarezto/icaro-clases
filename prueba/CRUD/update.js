"use strict"

const { leer } = require("./read")
const { escribir } = require("./writeJSON")
const { editar } = require("../comandos")
const { encontrarIndice } = require("./helpers")

const actualizar = (path, titulo, desc) => {
	const tareasParseadas = leer(path)
	const indiceTarea = encontrarIndice(tareasParseadas, titulo)

	tareasParseadas[indiceTarea] = editar(titulo, desc)

	if (indiceTarea !== -1) {
		escribir(path, tareasParseadas)

		return `Se actializó correctamente la tarea "${titulo}" con la siguiente descripción:
	
	desc: ${desc}`
	}

	return `No se encontró la tarea "${titulo}".`
}

module.exports = {
	actualizar,
}
