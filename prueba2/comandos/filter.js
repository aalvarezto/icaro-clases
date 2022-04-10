"use strict"

const filtrar = (tareas, texto) =>
	tareas.filter(({ title }) => title.includes(texto))

module.exports = {
	filtrar,
}
