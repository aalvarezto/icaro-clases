"use strict"

const fs = require("fs")

// const autosString = JSON.parse(fs.readFileSync("./hola-mundo.txt").toString()) // Esto expolota

//Esto es un string de JSON
const autosString = fs.readFileSync("./autos.json").toString()
console.log(autosString)

// Esto es un objeto de JavaScript
const autos = JSON.parse(autosString)

autos[0].marca = "fiat palio"

console.log(autos)
console.log(autos[0].fecha)
