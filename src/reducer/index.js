/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:34:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-10 14:15:55
 */

import { combineReducers } from 'redux';
import nav from './navReducer'
import user from './userReducer'
import { FaeReducer } from '@faegroup/common' 
// const AppReducer = combineReducers({
//   nav: navReducer,
//   user: userReducer,
// });

// export default AppReducer;

export default {
  nav,
  user,
  ...FaeReducer
}