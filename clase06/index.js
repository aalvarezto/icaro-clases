"use strict"

const fs = require("fs")

const bandasString = fs.readFileSync("./bandas.json").toString()
// Esto es un objeto de JavaScript
// Acá cargamos en memoria nuestro JSON
const bandas = JSON.parse(bandasString)

const banda1 = {
	nombre: "Luis Miguel",
	cancion: "El rey",
}

const banda2 = {
	nombre: "Los Palmeras",
	cancion: "Bombón Asesino",
}

bandas.push(banda1)
bandas.push(banda2)

// console.log(bandas)
const bandasStringProcesado = JSON.stringify(bandas, null, 4)
// console.log(bandasStringProcesado)

// Esta linea hace que persistan los datos
fs.writeFileSync("./bandas.json", bandasStringProcesado)
