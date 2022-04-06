"use strict"

const encontrar = (tareas, tituloAEncontrar) => {
	let estaEncontrado = false

	for (let i = 0; i < tareas.length; i++) {
		const titulo = tareas[i].title

		if (titulo === tituloAEncontrar) {
			estaEncontrado = true
		}
	}

	return estaEncontrado
}

module.exports = {
	encontrar,
}
