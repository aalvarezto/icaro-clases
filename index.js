"use strict"

const borrar = (tareas, titulo) => {
	const nuevasTareas = []

	for (let i = 0; i < tareas.length; i++) {
		const tarea = tareas[i]
		const tituloTarea = tarea.title

		if (titulo !== tituloTarea) {
			nuevasTareas.push(tarea)
		}
	}

	return nuevasTareas
}

// const filter = (arr, callback) => {
// 	const newArr = []

// 	for (let i = 0; i < arr.length; i++) {
// 		if (callback(arr[i], i, arr)) {
// 			newArr.push(arr[i])
// 		}
// 	}

// 	return newArr
// }

const ejemploTareas = [
	{
		title: "foo",
		desc: "bar",
	},
	{
		title: "foo2",
		desc: "bar2",
	},
	{
		title: "foo3",
		desc: "bar3",
	},
	{
		title: "foo4",
		desc: "bar4",
	},
]

const forEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]

		callback(element, i, arr)
	}
}

const map = (arr, callback) => {
	const newArr = []

	forEach(arr, (element, i, list) => {
		const mappedElement = callback(element, i, list)

		newArr.push(mappedElement)
	})

	return newArr
}

const filter = (arr, callback) => {
	const newArr = []

	forEach(arr, (element, i, list) => {
		const isTruthy = callback(element, i, list)

		if (isTruthy) {
			newArr.push(element)
		}
	})

	return newArr
}

const reduce = (arr, callback, initial) => {
	let accumulator = initial ?? arr[0]

	forEach(arr, (element, i, list) => {
		accumulator = callback(accumulator, element, i, list)
	})

	return accumulator
}

Array.prototype.myForEach = function (callback) {
	return forEach(this, callback)
}

Array.prototype.myMap = function (callback) {
	return map(this, callback)
}

Array.prototype.myFilter = function (callback) {
	return filter(this, callback)
}

Array.prototype.myReduce = function (callback, initial) {
	return reduce(this, callback, initial)
}

// const foo = [1, 2, 3,4].myForEach(v => console.log(v))
const foo2 = [1, 2, 3, 4].myMap(v => v + 1)
const foo3 = [1, 2, 3, 4].myFilter((_, i) => i !== 2)
const foo4 = [1, 2, 3, 4].myReduce(
	({ foo }, element) => {
		foo += element
		return { foo }
	},
	{ foo: 0 }
)

console.log(foo4)

// const salida = borrar(ejemploTareas, "foo2")

const salida = filter(ejemploTareas, (_, i) => i !== 2)

console.log(salida)
