/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:29:49 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-04 18:12:00
 */

 
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator'

const initialNavState=AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'Home',
	  }),
	],
}))

export default function nav (state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};