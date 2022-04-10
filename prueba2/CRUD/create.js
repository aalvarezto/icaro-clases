"use strict"

const { leer } = require("./read")
const { escribir } = require("./writeJSON")
const { editar } = require("../comandos")

const crear = (path, titulo, desc) => {
	const tareasParseadas = leer(path)
	const tarea = editar(titulo, desc)

	tareasParseadas.push(tarea)

	escribir(path, tareasParseadas)

	return `La tarea "${titulo}" ha sido correctamente creada en ${path}.`
}

module.exports = {
	crear,
}
