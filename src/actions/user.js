/*
 * @Author: aran.hu 
 * @Date: 2018-01-05 16:44:05 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-05 16:58:47
 */

import {
	UPDATE_USER
} from './action_type'

export const updateUserInfo = (data) => {
	console.log('action----user---', data);
	return {
			type: UPDATE_USER,
			data: data,
	}
}