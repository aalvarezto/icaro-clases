"use strict"

// comando a ejecutar 👇🏻
// node app.js hola cómo estás hola

var entrada = process.argv

var salida

var valorABuscar = entrada[2]

for (let i = 3; i < entrada.length; i++) {
	if (entrada[i] === valorABuscar) {
		salida = i
		console.log("encontré el elemento", entrada[i])
		console.log("en el índice", i)
	}
}

// console.log("valor de busqueda", busqueda)

console.log("la salida es:", salida)
