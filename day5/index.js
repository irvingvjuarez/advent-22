function getMaxGifts(giftsCities, maxGifts, maxCities) {
	giftsCities = giftsCities.filter(city => city <= maxGifts)
	const availableCities = giftsCities.length > 0
	const returnPoint = giftsCities.length <= maxCities
	let result = 0

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
		giftsCities.forEach((_cityGifts, cityGiftsIndex) => {
			const currentGiftsCities = [...giftsCities]
			currentGiftsCities.splice(cityGiftsIndex, 1)
			const currentResult = getMaxGifts(currentGiftsCities, maxGifts, maxCities)

			if (currentResult > result && currentResult <= maxGifts) {
				result = currentResult
			}
		})

		return result
	} else {
		return result
	}
}

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