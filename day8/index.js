function checkPart(part) {
	let result = false
	const partArr = part.split("")
	const isWordPalindrome = partArr.reverse().join("") === part
	if (isWordPalindrome) return isWordPalindrome

	partArr.forEach((_c, charIndex) => {
		const currentWordArr = partArr.filter((_a, actualCharIndex) => actualCharIndex !== charIndex)
		const currentWord = currentWordArr.join("")
		const isPalindrome = currentWordArr.reverse().join("") === currentWord
		if (isPalindrome) result = isPalindrome
	})

  return result
}

console.log(
	checkPart("uwu")
) // true
console.log(
	checkPart("miidim")
) // true
console.log(
	checkPart("midu")
) // false