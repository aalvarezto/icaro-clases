"use strict"

const filtrar = (tareas, texto) => {
	let tareasFiltradas = []

	for (let i = 0; i < tareas.length; i++) {
		const tarea = tareas[i]
		const titulo = tarea.title

		if (titulo.includes(texto)) {
			tareasFiltradas.push(tarea)
		}
	}

	return tareasFiltradas
}

module.exports = {
	filtrar,
}
