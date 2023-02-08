function getFilesToBackup(lastBackup, changes) {
	changes = changes
		.filter(change => change[1] > lastBackup)
		.map(change => change[0])
		.sort((a, b) => {
			let res = 0
			if (a > b) res = 1
			if (a < b) res = -1
			return res
		})

	const files = Array.from(new Set(changes))

	return files || []
}

const lastBackup = 1546300800

const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(
	getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
)
