import React from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { FaeComponent } from '@faegroup/common'
import CommonCmponent from './CommonComponent'
import { getWarpPage } from './WarppComponent'
const RootNavigator = StackNavigator({
	CommonCmponent: { 
    screen: CommonCmponent,
    navigationOptions: ({navigation}) => ({
      title: (navigation.state.params && navigation.state.params.name) || 'Default Title'
    })
  },
  TabTest: {
    screen: getWarpPage({componentType: 'Tab'}),
  }
},{
  initialRouteName: 'TabTest'
})

const makeNavConfig = () => {
  let config = {}  
}

const AppWithNavigationState = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FaeComponent.CustomerLoading />
      <RootNavigator />
    </View>
  )
};
export default AppWithNavigationState


