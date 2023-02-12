function getOptimalPath(path) {
	const firstWay = {
		sum: 0,
		items: [],
		index: 0
	}
	const secondWay = {
		sum: 0,
		items: [],
		index: 0
	}

	const ways = [firstWay, secondWay]

	path.forEach((step, pathIndex) => {
		if (pathIndex === 0) {
			ways.forEach(({items, index}) => items.push(step[index]))
			path[pathIndex + 1].forEach((item, index) => ways[index].items.push(item))

			secondWay.index += 1
		}

		if (pathIndex != 0 && path[pathIndex + 1]?.length){
			const nextLevel = path[pathIndex + 1]

			ways.forEach(({index, items}, wayIndex) => {
				const subPath = nextLevel.filter((_, subIndex) => subIndex === index || subIndex === index + 1)

				// console.log(subPath)

				const sides = {
					left: subPath[0],
					right: subPath[1]
				}
				let newItem = sides.left

				if (sides.right < sides.left) {
					ways[wayIndex].index += 1
					newItem = sides.right
				} else if (sides.right === sides.left) {
					// Check lower level
				}

				items.push(newItem)
			})
		}
	})

	let sums = []

	ways.forEach(way => {
		way.sum = way.items.reduce((prev, curr) => prev += curr, 0)
		sums.push(way.sum)
	})

	const minValue = Math.min(...sums)
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