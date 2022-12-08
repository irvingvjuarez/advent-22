let maxNumber = 0

function getMaxGifts(giftsCities, maxGifts, maxCities) {
	giftsCities = giftsCities.filter(city => city <= maxGifts)
	const availableCities = giftsCities.length > 0
	const returnPoint = giftsCities.length <= maxCities
	let result = 0

	if (returnPoint) {
		const currentValue = giftsCities.reduce((previous, current) => previous += current, 0)
		if (currentValue > maxNumber && currentValue <= maxGifts) {
			maxNumber = currentValue
		}
		return maxNumber
	} else if (availableCities) {
		giftsCities.forEach((_cityGifts, cityGiftsIndex) => {
			const currentGiftsCities = [...giftsCities]
			currentGiftsCities.splice(cityGiftsIndex, 1)
			result = getMaxGifts(currentGiftsCities, maxGifts, maxCities)

			if (result > maxNumber && result <= maxGifts) {
				maxNumber = result
			}
		})

		return maxNumber
	} else {
		return result
	}
}

// console.log(
// 	getMaxGifts([50], 15, 1)
// ) // 0

// console.log(
// 	getMaxGifts([50], 100, 1)
// ) // 50

console.log(
	getMaxGifts([12, 3, 11, 5, 7], 20, 3)
) // 20