function fitsInOneBox(boxes) {
	let result = false

	for(let boxIndex in boxes) {
		const currentBoxes = boxes.filter((_box, index) => String(index) !== boxIndex)
		const currentBox = boxes[boxIndex]

		const fitsInThisBox = currentBoxes.every(box => {
			const fitsInLength = currentBox.l > box.l
			const fitsInWidth = currentBox.w > box.w
			const fitsInHeight = currentBox.h > box.h

			return fitsInHeight && fitsInWidth && fitsInLength
		})

		if (fitsInThisBox) {
			result = fitsInThisBox
			break;
		}
	}

  return result
}

const boxes = [
	{ l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 }
]

const result = fitsInOneBox(boxes)
console.log({ result })