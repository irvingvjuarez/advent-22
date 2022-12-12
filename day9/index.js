function countTime(leds) {
	let rounds = 0;
	const secondsPerRound = 7;

	while(leds.every(led => Boolean(led)) === false){
		const currentLedState = [...leds]

		currentLedState.forEach((led, ledIndex) => {
			let leftLed
			if (ledIndex === 0) {
				leftLed = currentLedState[leds.length - 1]
			} else {
				leftLed = currentLedState[ledIndex - 1]
			}

			if (leftLed) {
				leds[ledIndex] = 1
			}
		})

		rounds++
	}

  return rounds * secondsPerRound;
}

console.log(
	countTime([0,1,1,0,1])
)  // 7
console.log(
	countTime([0,0,0,1])
) // 21
console.log(
	countTime([0,0,1,0,0])
) // 28