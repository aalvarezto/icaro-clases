"use strict"

var nombre = "Facundo"

function asignarANombreYLoguear(nuevoNombre) {
	nombre = nuevoNombre

	console.log(nombre)
}

console.log("============== Primer ejemplo ==============")
console.log(nombre)

console.log("============== Segundo ejemplo =============")
asignarANombreYLoguear("Agus")

console.log("============== Tercer ejemplo ==============")
asignarANombreYLoguear("Carlos")
