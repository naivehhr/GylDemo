/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:29:49 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 19:14:47
 */

 
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator'
import {
	SET_TOP_NAVIGATOR
} from '../actions/action_type'
const initialNavState={...AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'Home',
	  }),
	],
})), topNavigation: null}

export default function nav (state = initialNavState, action) {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	switch (action.type) {
    case SET_TOP_NAVIGATOR:
      return { ...state, ...action.data };
    default:
      return nextState || state;;
  }
};