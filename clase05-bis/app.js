"use strict"

const {
	listar,
	encontrar,
	editar,
	filtrar,
	retornar,
} = require("./comandos/tasks")
const { tasks } = require("./tasksData")

const entrada = process.argv
const comando = entrada[2]
const parametroUno = entrada[3]
const parametroDos = entrada[4]

let salida

switch (comando) {
	case "filter":
		salida = filtrar(tasks, parametroUno)
		break
	case "list":
		salida = listar(tasks)
		break
	case "find":
		salida = encontrar(tasks, parametroUno)
		break
	case "edit":
		salida = editar(parametroUno, parametroDos)
		break
	case "return":
		salida = retornar(tasks, parametroUno)
		break
	default:
		salida = "no se reconoce el comando"
}

// if (comando === "filter") {
// 	salida = filtrar(tasks, parametroUno)
// } else if (comando === "list") {
// 	salida = listar(tasks)
// } else if (comando === "find") {
// 	salida = encontrar(tasks, parametroUno)
// } else if (comando === "edit") {
// 	salida = editar(parametroUno, parametroDos)
// } else if (comando === "return") {
// 	salida = retornar(tasks, parametroUno)
// } else {
// 	salida = "no se reconoce el comando"
// }

console.log(salida)
