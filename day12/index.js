function selectSleigh(distance, sleighs) {
	sleighs = sleighs.map(sled => ({
		...sled,
		totalComsuption: sled.consumption * distance
	})).sort((a, b) => {
		let res = 0
		if (a.totalComsuption > b.totalComsuption) res = 1
		if (a.totalComsuption < b.totalComsuption) res = -1
		return res
	}).filter(sled => sled.totalComsuption <= 20)

	const bestOption = sleighs.pop()

	if (bestOption) {
		return bestOption.name
	}

  return null
}

const distance = 30
const sleighs = [
  { name: "Madeval", consumption: 0.5 },
  { name: "Hyuuh", consumption: 1 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Gorusuke", consumption: 0.3 },
]

console.log(
	selectSleigh(distance, sleighs) // => "Madeval"
)