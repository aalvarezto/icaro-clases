"use strict"

import { siNuevoNombreLengthMayorACincoReasignar } from "./ejemploIf"

var { siNuevoNombreLengthMayorACincoReasignar, print } = require("./ejemploIf")
var { limpiarStringHastaCinco } = require("./ejemploWhile.js")

var nombre = "Facundo"

console.log("============== Primer ejemplo ==============")
console.log(nombre)

console.log("============== Segundo ejemplo =============")
limpiarStringHastaCinco("Agus 123456578912345")
console.log(nombre)

console.log("============== Tercer ejemplo ==============")
limpiarStringHastaCinco("Carlos 123")
console.log(nombre)
