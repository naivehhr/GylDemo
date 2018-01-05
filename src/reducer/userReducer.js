/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:34:31 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-05 17:01:11
 */
import {
	UPDATE_USER
} from '../actions/action_type'

const initialAuthState = { isLoggedIn: false };

export default function user(state = initialAuthState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.data };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}