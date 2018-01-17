import CommonCmponent from './CommonComponent'
import { getWarpComponent } from './WarpComponent'

const config = {
	CommonCmponent: CommonCmponent,
	WarpComponent: getWarpComponent
}

export const getPage = (key) => {
	return config[key] || CommonCmponent
}