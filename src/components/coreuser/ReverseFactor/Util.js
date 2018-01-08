
const makeData = (lastI=0) => {
	return [...'a'.repeat(10)].map((value, index) => {
		return {
			title: 'Item ' + (lastI + index),
			text: '凹凸曼' + (lastI + index),
			key: (lastI + index),
		}
	})
}


export default Utils = {
	makeData,
}
