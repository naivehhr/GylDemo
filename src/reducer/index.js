/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:34:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-04 18:22:11
 */

import { combineReducers } from 'redux';
import navReducer from './navReducer'
import userReducer from './userReducer'
const AppReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
});

export default AppReducer;