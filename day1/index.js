function getPaper = (gift) => {
	const size = gift.length
	return "**" + "*".repeat(size)
}

function wrapping(gifts) {
	const wrapped = gifts.map(gift => `${getPaper(gift)}\n*${gift}*\n${getPaper(gift)}`)
  return wrapped
}