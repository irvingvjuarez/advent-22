const possibleOutputs = {}

function getMaxGifts(giftsCities, maxGifts, maxCities) {
	giftsCities = giftsCities.filter(city => city <= maxGifts)
	const availableCities = giftsCities.length > 0

	let result = 0

	if (availableCities) {
		console.log("Process...")
	} else {
		return result
	}
}

console.log(
	getMaxGifts([50], 15, 1)
) // 0

console.log(
	getMaxGifts([50], 100, 1)
) // 50 || "process..."