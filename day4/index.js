function fitsInOneBox(boxes) {
	let result = false

	for(let boxIndex in boxes) {
		const currentBoxes = boxes.filter((_box, index) => String(index) !== boxIndex)
		const currentBox = boxes[boxIndex]

		const fitsInThisBox = currentBoxes.every(box => {
			const fitsInLength = box.l < currentBox.l
			const fitsInWidth = box.w < currentBox.w
			const fitsInHeight = box.h < currentBox.h
			return fitsInHeight && fitsInWidth && fitsInLength
		})

		if (fitsInThisBox) {
			result = true;
			break;
		}
	}

  return result
}

const boxes = [
	{ l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]

const result = fitsInOneBox(boxes)
console.log({ result })