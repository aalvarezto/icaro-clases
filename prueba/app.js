"use strict"

const { listar, encontrar, filtrar, retornar } = require("./comandos")
const { leer, crear, actualizar, borrar } = require("./CRUD")

const entrada = process.argv
const comando = entrada[2]
const parametroUno = entrada[3]
const parametroDos = entrada[4]

const TAREAS_PATH = "./tasksData.json"
const tasks = leer(TAREAS_PATH)

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
	case "return":
		salida = retornar(tasks, parametroUno)
		break
	case "add":
		salida = crear(TAREAS_PATH, parametroUno, parametroDos)
		break
	case "edit":
		salida = actualizar(TAREAS_PATH, parametroUno, parametroDos)
		break
	case "delete":
		salida = borrar(TAREAS_PATH, parametroUno)
		break
	default:
		salida = "no se reconoce el comando"
}

console.log(salida)
