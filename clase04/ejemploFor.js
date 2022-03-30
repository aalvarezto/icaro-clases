"use strict"

var arr = ["1", 12, {}, 1, 2, 3, 4]

var busqueda

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])

	if (arr[i] === 12) {
		busqueda = arr[i]
		console.log("encontré el número 12")
	}
}

console.log("valor de busqueda", busqueda)
