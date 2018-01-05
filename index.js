/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 17:26:20 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-05 17:12:01
 */
import { View, AppRegistry } from 'react-native';

import React, {Component} from 'react'

import { CounterApp } from './app/';
import { configureStore } from './ConfigureStore'
import PersistGate from './PersistGate'
const { persistor } = configureStore()
class App extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
      </PersistGate>
    )
  }
}

// export default class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			store: null
// 		}
// 	}

// 	componentDidMount() {
// 		// ConfigureStore(() => {
			
// 		// })
// 		// console.log(store)
// 	}
// 	render() {
// 		return (
// 			<Provider store={store}>
//         <AppWithNavigationState />
//       </Provider>
// 		)
// 	}
// }

AppRegistry.registerComponent('GylDemo', () => App);
