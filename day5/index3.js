function getMaxGifts(giftsCities, maxGifts, maxCities) {
	if (giftsCities.length > 1) {
		// Handling normal process
	}

	const gifts = giftsCities[0]
	return gifts < maxGifts ? gifts : 0
}

console.log(
	getMaxGifts([50], 15, 1)
) // 0