"use strict"

const retornar = (tareas, tituloAEncontrar) => {
	let descripcionARetornar = "no encontrado"

	for (let i = 0; i < tareas.length; i++) {
		const titulo = tareas[i].title
		const descripcion = tareas[i].desc

		if (titulo === tituloAEncontrar) {
			descripcionARetornar = descripcion
		}
	}

	return descripcionARetornar
}

module.exports = {
	retornar,
}
