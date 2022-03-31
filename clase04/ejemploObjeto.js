"use strict"

var personas = [
	{
		nombre: "Graciela",
		gustosDeHelado: ["dulce de leche", "sambayón", "menta granizada"],
	},
	{
		nombre: "Pablo",
		gustosDeHelado: ["crema del cielo", "tiramisú", "chocolate blanco"],
	},
]
// creación de una nueva propiedad
personas[0].lenguajeFavorito = "JavaScript"

personas[0].idiomas = ["español", "inglés"]

personas[0].idiomas.push("portugués")

console.log(personas[1].gustosDeHelado)
