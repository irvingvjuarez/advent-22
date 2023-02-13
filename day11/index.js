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

	const min = (value, divisable = primeNumbers[0], obj = {}) => {
		if (value in obj) return obj[value]
		for(let num of primeNumbers) {
			if (value % num === 0) {
				return obj[value] = min(value / num, num, obj)
			}
		}

		return obj[value] = {value, divisableUntil: divisable}
	}

	const reduce = (fraction, obj = {}) => {
		if (fraction in obj) return obj[fraction]

		fraction = fraction.split("/")
		const partiality = Number(fraction[0])
		const totality = Number(fraction[1])

		for(let num of primeNumbers) {
			if (partiality % num === 0 && totality % num === 0) {
				const regularFraction = `${partiality/num}/${totality/num}`
				return obj[regularFraction] = reduce(regularFraction, obj)
			}
		}

		if (partiality <= 9 && totality <= 9) {
			const newFraction = fraction.join("/")
			return obj[newFraction] = newFraction
		}

		const {divisableUntil: partialDivisable} = min(partiality)
		const {divisableUntil: totalDivisable} = min(totality)

		if (partialDivisable > totalDivisable) {
			const divisableFraction = `1/${totalDivisable}`
			return obj[divisableFraction] = divisableFraction
		}


		const finalFraction = `${partialDivisable}/${totalDivisable}`
		return obj[finalFraction] = finalFraction
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