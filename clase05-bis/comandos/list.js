"use strict"

const listar = tareas => {
	let titulos = []

	for (let i = 0; i < tareas.length; i++) {
		const titulo = tareas[i].title

		titulos.push(titulo)
	}

	return titulos
}

module.exports = {
	listar,
}
