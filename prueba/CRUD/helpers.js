"use strict"

const encontrarIndice = (tareas, titulo) => {
	let indiceEncontrado = -1

	for (let i = 0; i < tareas.length; i++) {
		const tarea = tareas[i]
		const tituloTarea = tarea.title

		if (titulo === tituloTarea) {
			indiceEncontrado = i
		}
	}

	return indiceEncontrado
}

const filtrarPorTitulo = (tareas, titulo) => {
	const tareasFiltradas = []

	for (let i = 0; i < tareas.length; i++) {
		const tarea = tareas[i]
		const tituloTarea = tarea.title

		if (tituloTarea !== titulo) {
			tareasFiltradas.push(tarea)
		}
	}

	return tareasFiltradas
}

module.exports = {
	encontrarIndice,
	filtrarPorTitulo,
}
