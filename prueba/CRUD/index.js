"use strict"

const { borrar } = require("./delete")
const { crear } = require("./create")
const { leer } = require("./read")
const { actualizar } = require("./update")
const { escribir } = require("./writeJSON")

module.exports = {
	borrar,
	crear,
	leer,
	actualizar,
	escribir,
}
