/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:34:31 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-04 17:57:56
 */

const initialAuthState = { isLoggedIn: false };

export default function user(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}