"use strict"

const { listar, encontrar, filtrar, retornar } = require("./comandos")
const { leer, crear, actualizar, borrar } = require("./CRUD")

const [, , comando, parametroUno, parametroDos] = process.argv

const TAREAS_PATH = "./tasksData.json"
const tasks = leer(TAREAS_PATH)

//prettier-ignore
const salida =
	  comando === "filter"	? filtrar	(tasks, parametroUno)
	: comando === "list"	? listar	(tasks)
	: comando === "find"	? encontrar	(tasks, parametroUno)
	: comando === "return"	? retornar	(tasks, parametroUno)
	: comando === "add"		? crear		(TAREAS_PATH, parametroUno, parametroDos)
	: comando === "edit"	? actualizar(TAREAS_PATH, parametroUno, parametroDos)
	: comando === "delete"	? borrar	(TAREAS_PATH, parametroUno)
	: "no se reconoce el comando"

console.log(salida)
