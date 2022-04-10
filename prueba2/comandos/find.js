"use strict"

const encontrar = (tareas, tituloAEncontrar) =>
	Boolean(tareas.find(({ title }) => title === tituloAEncontrar))

module.exports = {
	encontrar,
}
