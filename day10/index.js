function checkJump(heights) {
	const directions = []
	let currentDirection

	heights.forEach((height, heightIndex) => {
		if (heightIndex !== 0) {
			const previousHeight = heights[heightIndex - 1]
			if (previousHeight < height) {
				if (currentDirection !== "up") {
					currentDirection = "up"
					directions.push(currentDirection)
				}
			} else if (previousHeight > height) {
				if (currentDirection !== "down") {
					currentDirection = "down"
					directions.push(currentDirection)
				}
			}
		}
	})

	return directions.length === 2
}

console.log(
	checkJump([1,3,8,5,2])
) // true
console.log(
	checkJump([1,7,3,5])
) // false