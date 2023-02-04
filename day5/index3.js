function getMaxGifts(giftsCities, maxGifts, maxCities) {
	if (giftsCities.length > 1) {
		let sums = []

		const sortedCities = giftsCities.sort((a, b) => {
			let res = 0;

			if (a < b) res = -1
			if (a > b) res = 1

			return res
		})

		sortedCities.forEach((_item, index) => {
			const copiedCities = [...sortedCities]
			const target = copiedCities.splice(index, 1)

			if (maxCities > target.length) {
				for (let i = 0; i < (maxCities - 1); i++) {
					const nextNumber = copiedCities[i]

					if (nextNumber){
						const targetSum = target.reduce((prev, current) => prev + current, 0) + nextNumber

						if (targetSum > maxGifts) {
							break;
						} else {
							target.push(nextNumber)
						}
					} else {
						break;
					}
				}

				sums.push(target)
			} else {
				sums.push(target)
			}
		})

		sums = sums.map(arr => arr.reduce((prev, current) => prev + current, 0)).filter(sum => sum <= maxGifts)

		return Math.max(...sums)
	}

	const gifts = giftsCities[0]
	return gifts < maxGifts ? gifts : 0
}

console.log(
	getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)
) // 100

console.log(
	getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
) // 115

console.log("---------------------")

console.log(
	getMaxGifts([50], 15, 1)
) // 0

console.log(
	getMaxGifts([12, 3, 11, 5, 7], 20, 3)
) // 20

console.log(
	getMaxGifts([50], 100, 1)
) // 50

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