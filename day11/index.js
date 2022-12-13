// Pasa todo el tiempo a segundos, lo sumas y divides part/total. El algoritmo seria de reduccion a su minima expresion iterando por un array de numeros primos, hasta que no haya coincidencias en las dos: part y total

function getCompleted(part, total) {
	const primeNumbers = [10, 9, 7, 5, 3, 2]

	let partTime = part.split(":").map((time, timeIndex) => {
		time = Number(time)
		switch(timeIndex) {
			case 0:
				// hours
				time = time * 60 * 60
			break;
			case 1:
				// minutes
				time *= 60
			break;
		}

		return time
	}).reduce((previous, current) => previous += current, 0)

	let totalTime = total.split(":").map((time, timeIndex) => {
		time = Number(time)
		switch(timeIndex) {
			case 0:
				// hours
				time = time * 60 * 60
			break;
			case 1:
				// minutes
				time *= 60
			break;
		}

		return time
	}).reduce((previous, current) => previous += current, 0)

	while(primeNumbers.some(num => totalTime % num === 0 && partTime % num === 0)) {
		const dividor = primeNumbers.find(num => totalTime % num === 0 && partTime % num === 0)
		partTime /= dividor
		totalTime /= dividor
	}

  return `${partTime}/${totalTime}`
}

console.log(
	getCompleted('01:00:00', '03:00:00')
) // '1/3'
console.log(
	getCompleted('02:00:00', '04:00:00')
) // '1/2'
console.log(
	getCompleted('01:00:00', '01:00:00')
) // '1/1'
console.log(
	getCompleted('00:10:00', '01:00:00')
) // '1/6'
console.log(
	getCompleted('01:10:10', '03:30:30')
) // '1/3'
console.log(
	getCompleted('03:30:30', '05:50:50')
) // '3/5