function distributeGifts(packOfGifts, reindeers) {
	const packWeights = packOfGifts.reduce((previos, current) => previos += current.length, 0)
	const reindeersCanCarry = reindeers.reduce((previous, current) => previous += current.length * 2, 0)
	const result = Math.floor(reindeersCanCarry / packWeights)

  return result
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
const packagesToDeliver = distributeGifts(packOfGifts, reindeers)
console.log({ packagesToDeliver })