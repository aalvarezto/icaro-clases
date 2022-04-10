"use strict"

const fs = require("fs")

/**
 * Esta función `eliminarTareaPorTitulo()` filtra el array de tareas basándonos en el título que coloquemos en el segundo parámetro. El filtrado es excluyente en este caso, por lo que va a devolvernos un nuevo array excluyendo a los que coincidan con el argumento `titulo`.
 *
 * @param {Tasks} tareas array de tareas
 * @param {string} titulo tarea que queremos que no esté en nuestro array
 * @returns {FilteredArray[]}
 */

const eliminarTareaPorTitulo = (tareas, titulo) => {
	const nuevasTareas = []

	for (let i = 0; i < tareas.length; i++) {
		const tarea = tareas[i]
		const tituloTarea = tarea.title

		if (titulo !== tituloTarea) {
			nuevasTareas.push(tarea)
		}
	}

	return nuevasTareas
}

const borrar = (tareas, titulo) => {
	const tareasFiltradas = eliminarTareaPorTitulo(tareas, titulo)

	if (tareas.length !== tareasFiltradas.length) {
		const jsonString = JSON.stringify(tareasFiltradas, null, 4)

		fs.writeFileSync("./foo.json", jsonString)

		return "la tarea '" + titulo + "' fue exitosamente eliminada"
	}

	return "la tarea '" + titulo + "' no ha sido encontrada"
}

module.exports = {
	borrar,
}
