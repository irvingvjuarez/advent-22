function getMaxGifts(giftsCities, maxGifts, maxCities) {
	giftsCities = giftsCities.sort((a, b) => {
		let comparisonResult = 0;
		if (a < b) comparisonResult = 1
		if (a > b) comparisonResult = -1

		return comparisonResult
	})

	console.log(giftsCities)

  return 0
}

getMaxGifts([12, 3, 11, 5, 7], 20, 3)