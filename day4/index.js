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
			const boxesRecursion = currentBoxes.length > 1 ? fitsInOneBox(currentBoxes) : true

			result = fitsInThisBox && boxesRecursion
			break;
		}
	}

  return result
}

const exerciseOne = fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
])
console.log({ exerciseOne }) // true

const test2 = fitsInOneBox([
	{ l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 }
])
console.log({ test2 }) // false

const test3 = fitsInOneBox([
	{ l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
])
console.log({ test3 }) // false

const test4 = fitsInOneBox([
	{ l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
])
console.log({ test4 }) // true