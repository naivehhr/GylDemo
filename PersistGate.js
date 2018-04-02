import React, { Component, View, Text } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { configureStore } from './ConfigureStore'
import AppWithNavigationState from './src/AppNavigator'
// import AppWithNavigationState from './ConfigModel/RootNavigator'
const { persistor, store } = configureStore()
const onBeforeLift = (props) => {
  // take some action before the gate lifts
}

export default () => (
  <Provider store={store}>
    <PersistGate
      onBeforeLift={onBeforeLift}
      persistor={persistor}>
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
)

const Loading = () => {
  return (
    <View >
      <Text>loading</Text>
    </View>
  );
}

// class Loading extends Component {
// 	render(){
// 		return (
// 			<View >
// 				<Text>loading</Text>
// 			</View>
// 		);
// 	}
// }