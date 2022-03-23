"use strict"

function siNuevoNombreLengthMayorACincoReasignar(nuevoNombre) {
	if (nuevoNombre.length > 5) {
		nombre = nuevoNombre
	}
}

function print() {
	console.log("============== Primer ejemplo ==============")
	console.log("ESTOY EN ejemploIf.js")
	console.log(nombre)

	console.log("============== Segundo ejemplo =============")
	siNuevoNombreLengthMayorACincoReasignar("Agus")
	console.log(nombre)

	console.log("============== Tercer ejemplo ==============")
	siNuevoNombreLengthMayorACincoReasignar("Carlos")
	console.log(nombre)
}

module.exports = {
	siNuevoNombreLengthMayorACincoReasignar,
	print,
}
