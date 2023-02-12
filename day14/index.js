function getOptimalPath(path) {
	const generateWay = (sum= 0, index= 0) => ({sum, index, items: []})
	const firstWay = generateWay()
	const secondWay = generateWay()

	const ways = [firstWay, secondWay]
	const initSetup = (step, pathIndex) => {
		ways.forEach(({items, index}) => items.push(step[index]))
		path[pathIndex + 1].forEach((item, index) => ways[index].items.push(item))
		secondWay.index += 1
	}
	const rightAsMinor = (wayIndex, sides) => {
		ways[wayIndex].index += 1
		return sides.right
	}

	const evaluateLowerLevel = (level, {pathways = ways, levelIndex}) => {
		pathways.forEach(({index, items}, wayIndex) => {
			const subPath = level.filter((_, subIndex) => subIndex === index || subIndex === index + 1)
			const sides = {}
			// console.log(subPath)

			let newItem = sides.left = subPath[0]
			sides.right = subPath[1]

			if (sides.right < sides.left) {
				newItem = rightAsMinor(wayIndex, sides)
			} else if (sides.right === sides.left) {
				// Get index of every item
				const rightIndex = index + 1
				const leftIndex = index
				// Create two new pathways
				const subPathwayLeft = {...generateWay(0, leftIndex), side: "left"}
				const subPathwayRight = {...generateWay(0, rightIndex), side: "right"}
				// Get the next level
				const lowerLevel = path[levelIndex + 1]
				// Get the returned value to choose something
				const { updatedPathways } = evaluateLowerLevel(lowerLevel, {
					pathways: [subPathwayLeft, subPathwayRight]
				})

				// I know the first returned item is left
				const leftResult = updatedPathways[0].items[0]
				const rightResult = updatedPathways[1].items[0]
				if (leftResult > rightResult) {
					newItem = rightAsMinor(wayIndex, sides)
				}
			}

			items.push(newItem)
		})

		const updatedPathways = [...pathways]
		return { updatedPathways }
	}

	path.forEach((step, pathIndex) => {
		if (pathIndex === 0) initSetup(step, pathIndex)

		if (pathIndex != 0 && Boolean(path[pathIndex + 1])){
			const levelIndex = pathIndex + 1
			evaluateLowerLevel(path[levelIndex], { levelIndex })
		}
	})

	let sums = []

	ways.forEach(way => {
		way.sum = way.items.reduce((prev, curr) => prev += curr, 0)
		sums.push(way.sum)
	})

	const minValue = sums.reduce((prev, curr) => curr < prev ? curr : prev, sums[0])
  return minValue
}

console.log(
	getOptimalPath([[0], [2, 3]]) // 2
)

console.log(
	getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
)

console.log(
	getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
)

console.log(
	getOptimalPath([[1], [1, 5], [3, 3, 8], [9, 4, 1, 3]]) // 6
)