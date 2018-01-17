import React from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { FaeComponent } from '@faegroup/common'
import CommonCmponent from './CommonComponent'
import { getWarpComponent } from './WarpComponent'
import { getPage } from './GetPage'
import TabNav from './TabNav'


// const RootNavigator = StackNavigator({
//   CommonCmponent: {
//     screen: CommonCmponent,
//     navigationOptions: ({ navigation }) => ({
//       title: (navigation.state.params && navigation.state.params.name) || 'Default Title'
//     })
//   },
//   TabTest: {
//     screen: getWarpComponent({ componentType: 'Tabs' }),
//   }
// }, {
//     initialRouteName: 'TabTest'
//   })
// let c = makeNavConfig()
const RootNavigator = StackNavigator(makeNavConfig(), {
  initialRouteName: 'p2'
})

function makeNavConfig() {
  let config = {
    'p1': {
      'screen': 'CommonCmponent',
    },
    'p2': {
      'screen': 'WarpComponent',
      'screenProps': {
        'componentType': 'Tabs',
        'childTabs': {
          '子页面1': {
            'screen': 'CommonCmponent',
          },
          '子页面2': {
            'screen': 'CommonCmponent',
          }
        }
      }
    }
  }

  let navConfig = {}
  Object.keys(config).map((pName, index) => {
    const screenConfig = config[pName]
    // console.log('screenConfig.screen', screenConfig.screen)
    const component = getPage(screenConfig.screen)
    switch (screenConfig.screen) {
      case 'CommonCmponent':
        navConfig[pName] = {
          screen: component,
          navigationOptions: ({ navigation }) => ({
            title: (navigation.state.params && navigation.state.params.name) || 'Default Title'
          })
        }
        break;
      case 'WarpComponent':
        navConfig[pName] = {
          screen: component(screenConfig.screenProps),
          navigationOptions: ({ navigation }) => ({
            title: (navigation.state.params && navigation.state.params.name) || 'Default Title'
          })
        }
        break
      default:
    }
  })
  // console.log(navConfig)
  return navConfig
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


