"use strict"

var nombre = "Facundo"

function limpiarStringHastaCinco(nuevoNombre) {
	while (nuevoNombre.length > 5) {
		// resta el último caracter
		nuevoNombre = nuevoNombre.slice(0, -1)
		console.log("Dentro del while ->", nuevoNombre)
	}

	nombre = nuevoNombre
}

console.log("============== Primer ejemplo ==============")
console.log(nombre)

console.log("============== Segundo ejemplo =============")
limpiarStringHastaCinco("Agus 123456578912345")
console.log(nombre)

console.log("============== Tercer ejemplo ==============")
limpiarStringHastaCinco("Carlos 123")
console.log(nombre)
