function getMaxGifts(giftsCities, maxGifts, maxCities) {
	const sum = (target, items, shoots, obj = {}) => {
		if (target <= 0 || shoots <= 0) return 0
		if (target in obj) return obj[target]

		const results = []
		for(let itemIndex in items) {
			const item = items[itemIndex]
			const newItems = [...items]
			newItems.splice(itemIndex, 1)

			if (target - item < 0) {
				results.push(0)
			} else {
				results.push(
					sum(target - item, newItems, shoots - 1, obj) + item
				)
			}
		}

		return obj[target] = Math.max(...results)
	}

  return sum(maxGifts, giftsCities, maxCities)
}

const giftsCities = [12, 3, 11]
const maxGifts = 20
const maxCities = 2

console.log(
	getMaxGifts(giftsCities, maxGifts, maxCities) // 15 (12 + 3)
)

const giftsCities2 = [12, 3, 11, 5, 7]
const maxGifts2 = 20
const maxCities2 = 3

console.log(
	getMaxGifts(giftsCities2, maxGifts2, maxCities2) // 20 (12 + 3 + 5)
)

console.log(
	getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
)
console.log(
	getMaxGifts([50], 15, 1) // 0
)
console.log(
	getMaxGifts([50], 100, 1) // 50
)
console.log(
	getMaxGifts([50, 70], 100, 1) // 70
)
console.log(
	getMaxGifts([50, 70, 30], 100, 2) // 100
)
console.log(
	getMaxGifts([50, 70, 30], 100, 3) // 100
)
console.log(
	getMaxGifts([50, 70, 30], 100, 4) // 100
)