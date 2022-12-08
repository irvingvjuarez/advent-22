function getMaxGifts(giftsCities, maxGifts, maxCities) {
	let result = 0
	const availableCities = giftsCities.length > 0
	const returnPoint = giftsCities.length <= maxCities

	if (returnPoint) {
		const currentValue = giftsCities.reduce((previous, current) => previous += current, 0)
		if (currentValue > result && currentValue <= maxGifts) {
			result = currentValue
		}

		if (giftsCities.length <= 1) {
			return result
		}
	}

	if (availableCities) {
		let currentResult

		if (giftsCities.length === 1) {
			currentResult = giftsCities[0]

			if (currentResult > result && currentResult <= maxGifts) {
				result = currentResult
			}
		} else {
			for (let cityGiftsIndex in giftsCities) {
				const currentGiftsCities = [...giftsCities]
				currentGiftsCities.splice(cityGiftsIndex, 1)
				currentResult = getMaxGifts(currentGiftsCities, maxGifts, maxCities)

				if (currentResult > result && currentResult <= maxGifts) {
					result = currentResult
				}
			}
		}

		return result
	} else {
		return result
	}
}

const timeStart = performance.now()

console.log(
	getMaxGifts([50], 15, 1)
) // 0

console.log(
	getMaxGifts([50], 100, 1)
) // 50;

console.log(
	getMaxGifts([12, 3, 11, 5, 7], 20, 3)
) // 20

console.log(
	getMaxGifts([50, 70], 100, 1)
) // 70

console.log(
	getMaxGifts([50, 70, 30], 100, 2)
) // 100

console.log(
	getMaxGifts([50, 70, 30], 100, 3)
) // 100

console.log(
	getMaxGifts([50, 70, 30], 100, 4)
) // 100

const timeEnd = performance.now()

console.log(`Time: ${timeEnd - timeStart}`)