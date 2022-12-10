function getGiftsToRefill(a1, a2, a3) {
	const giftsToRefill = []
	let stores = [a1, a2, a3]
	stores = stores.map(store => [...new Set(store)])

	const storeProducts = stores.flat(1)
	const uniqueProducts = [...new Set(storeProducts)]
	uniqueProducts.forEach(product => {
		const toRefill = storeProducts.filter(storeProduct => storeProduct === product).length === 1
		if (toRefill) {
			giftsToRefill.push(product)
		}
	})

  return giftsToRefill
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']