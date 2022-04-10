"use strict"

const retornar = (tareas, tituloAEncontrar) =>
	tareas.find(({ title }) => title === tituloAEncontrar).desc

module.exports = {
	retornar,
}
