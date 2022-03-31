import pause from "./inquirer/pause.js"

const composeAsync =
	(...fns) =>
	async x => {
		let count = fns.length

		while (count > 0) {
			count--
			x = await fns[count](x)
		}

		return x
	}

const traceAsync =
	(lable = "") =>
	async x => {
		console.log(lable)

		console.log(x)

		await pause()

		return x
	}

const capFirst = str => str.slice(0, 1).toUpperCase().concat(str.slice(1))

export { composeAsync, traceAsync, capFirst }
