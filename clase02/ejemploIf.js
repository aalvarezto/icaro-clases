"use strict"

var nombre = "Facundo"

function siNuevoNombreLengthMayorACincoReasignar(nuevoNombre) {
	if (nuevoNombre.length > 5) {
		nombre = nuevoNombre
	}
}

console.log("============== Primer ejemplo ==============")
console.log(nombre)

console.log("============== Segundo ejemplo =============")
siNuevoNombreLengthMayorACincoReasignar("Agus")
console.log(nombre)

console.log("============== Tercer ejemplo ==============")
siNuevoNombreLengthMayorACincoReasignar("Carlos")
console.log(nombre)
