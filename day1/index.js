function getPaper (gift) {
	const size = gift.length
	return "**" + "*".repeat(size)
}

function getWrapped(gifts) {
	return gifts.map(gift => {
		const wrapping = getPaper(gift)
		return `${wrapping}\n*${gift}*\n${wrapping}`
	})
}

function wrapping(gifts) {
	const wrapped = getWrapped(gifts)
  return wrapped
}