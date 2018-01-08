/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 19:01:33 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 19:02:20
 */

import {
	SET_TOP_NAVIGATOR
} from './action_type'

export const setTopNavigator = (data) => {
	console.log('action----nav---', data);
	return {
			type: SET_TOP_NAVIGATOR,
			data: data,
	}
}