function wrapping(gifts) {
	const wrapped = gifts.map(gift => `**${"*".repeat(gift.length)}\n*${gift}*\n**${"*".repeat(gift.length)}`)
  return wrapped
}