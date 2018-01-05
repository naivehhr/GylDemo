/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:34:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-05 17:07:47
 */

import { combineReducers } from 'redux';
import nav from './navReducer'
import user from './userReducer'
// const AppReducer = combineReducers({
//   nav: navReducer,
//   user: userReducer,
// });

// export default AppReducer;

export {
  nav,
  user
}