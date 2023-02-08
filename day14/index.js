function getOptimalPath(path) {
	const outputs = []
	let sum = 0, secondSum = 0
	let i = path.length

	while(path.every(step => step.length)) {
		for (let current of path) {
			sum += current[0]
			secondSum += current[current.length - 1]

		}

		i--

		if (i <= 1) i = path.length

		outputs.push(sum, secondSum)
		sum = secondSum = 0;

		path[i]?.pop()
		path[i]?.shift()
	}

	console.log("Outputs:", outputs)
	// console.log("Sum:", sum)
	// console.log("Second Sum:", secondSum)
	// console.log("Path:", path)

  return 0
}

// getOptimalPath([[0], [2, 3]]) // 2

// getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8