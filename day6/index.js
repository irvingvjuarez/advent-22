function createCube(size) {
	let fromUpDown = ""
	let fromDownUp = ""
	let wholeCube = ""

	for(let i = 0; i < size; i++) {
		const lineBreak = (i === size - 1) ? "" : "\n"

		const upShape = " ".repeat(size - (i + 1)) + "/\\".repeat(i + 1) + "_\\".repeat(size) + "\n"
		const downShape = " ".repeat(i) + "\\/".repeat(size - i) + "_/".repeat(size) + lineBreak

		fromUpDown += upShape
		fromDownUp += downShape
	}

	wholeCube = fromUpDown.concat(fromDownUp)
  return wholeCube
}

const cube = createCube(3)
console.log(cube)