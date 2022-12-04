function countHours(year, holidays) {
	let days = 0

	holidays.forEach(day => {
		const dateStr = `${day}/${year}`
		const wholeDate = new Date(dateStr)
		const weekDay = wholeDate.getDay()
		if (weekDay > 0 && weekDay < 6) {
			days += 2
		}
	})

  return days
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD
const days = countHours(year, holidays)
console.log({ days })