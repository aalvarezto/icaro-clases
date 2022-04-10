"use strict"

const { escribir } = require("./writeJSON")
const { leer } = require("./read")
const { filtrarPorTitulo } = require("./helpers")

const borrar = (path, titulo) => {
	const tareasParseadas = leer(path)
	const tareasFiltradas = filtrarPorTitulo(tareasParseadas, titulo)

	if (tareasFiltradas.length < tareasParseadas.length) {
		escribir(path, tareasFiltradas)

		return `Se eliminó correctamente la tarea "${titulo}".`
	}

	return `No se encontó la tarea "${titulo}".`
}

module.exports = {
	borrar,
}
