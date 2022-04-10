"use strict"

const encontrarIndice = (tareas, titulo) =>
	tareas.findIndex(({ title }) => title === titulo)

const filtrarPorTitulo = (tareas, titulo) =>
	tareas.filter(({ title }) => title !== titulo)

module.exports = {
	encontrarIndice,
	filtrarPorTitulo,
}
