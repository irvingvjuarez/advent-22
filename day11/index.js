// Pasa todo el tiempo a segundos, lo sumas y divides part/total. El algoritmo seria de reduccion a su minima expresion iterando por un array de numeros primos, hasta que no haya coincidencias en las dos: part y total

function getCompleted(part, total) {
	const times = [part, total].map(time => {
		return time
			.split(":")
			.map((time, index) => {
				time = Number(time)
				if (index === 0) return time * 60 * 60
				if (index === 1) return time * 60
				return time
			})
			.reduce((prev, curr) => curr + prev, 0)
	})

	const primeNumbers = [5, 3, 2]

	const min = (value, divisable = primeNumbers[0]) => {
		for(let num of primeNumbers) {
			if (value % num === 0) return min(value / num, num)
		}

		return {value, divisableUntil: divisable}
	}

	const reduce = (fraction) => {
		fraction = fraction.split("/")
		const partiality = Number(fraction[0])
		const totality = Number(fraction[1])

		for(let num of primeNumbers) {
			if (partiality % num === 0 && totality % num === 0) {
				return reduce(`${partiality/num}/${totality/num}`)
			}
		}

		if (partiality <= 9 && totality <= 9) {
			return fraction.join("/")
		} else {
			const {value: partial, divisableUntil: partialDivisable} = min(partiality)
			const {value: total, divisableUntil: totalDivisable} = min(totality)

			if (partialDivisable > totalDivisable) return `1/${totalDivisable}`
			return `${partialDivisable}/${totalDivisable}`
		}
	}

  return `${reduce(`${times[0]}/${times[1]}`)}`
}

console.log(
	getCompleted('01:00:00', '03:00:00') // '1/3'
)
console.log(
	getCompleted('02:00:00', '04:00:00') // '1/2'
)
console.log(
	getCompleted('01:00:00', '01:00:00') // '1/1'
)
console.log(
	getCompleted('00:10:00', '01:00:00') // '1/6'
)

console.log(
	getCompleted('01:10:10', '03:30:30') // '1/3'
)
console.log(
	getCompleted('03:30:30', '05:50:50') // '3/5
)
console.log(
	getCompleted('02:20:20', '03:30:30') // 2/3
)