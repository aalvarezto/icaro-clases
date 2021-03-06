"use strict"

import readInput from "./inquirer/readInput.js"

const validate = value =>
	value.length === 0
		? "Por favor ingrese un valor."
		: Number.isNaN(Number(value))
		? "Por favor ingrese un número válido."
		: true

const readTwo = async () =>
	[
		await readInput("Ingrese valor A:", validate),
		await readInput("Ingrese valor B:", validate),
	].map(Number)

export default readTwo
