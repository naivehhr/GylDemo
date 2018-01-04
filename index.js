/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:26:20 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-04 17:49:34
 */
import { View, AppRegistry } from 'react-native';

import React, {Component} from 'react'
import { Provider } from 'react-redux';

import { CounterApp } from './app/';
import ConfigureStore from './ConfigureStore'
import AppWithNavigationState from './src/AppNavigator'
const store = ConfigureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
        <AppWithNavigationState />
      </Provider>
		)
	}
}

AppRegistry.registerComponent('GylDemo', () => App);
