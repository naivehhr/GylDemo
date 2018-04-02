
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import { FaeComponent } from '@faegroup/common'
import CommonComponent from './CommonComponent'
// import { getWarpComponent } from './WarpComponent'
// import { getPage } from './GetPage'
// import TabNav from './TabNav'


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

// function getComponent(){
//   return class CommonComponent extends Component {
//     render() {
//       console.log('CommonComponent', this.props)
//       return (
//         <View >
//           <Text>CommonComponent</Text>
//         </View>
//       );
//     }
//   }
// }

const _config = {
  'p1': {
    'screen': 'CommonComponent',
  },
  'p2': {
    'screen': 'WarpComponent',
    'screenProps': {
      'componentType': 'Tabs',
      'childTabs': {
        '子页面1': {
          'screen': 'CommonComponent',
        },
        '子页面2': {
          'screen': 'CommonComponent',
        }
      }
    }
  },
  'p3': {
    'screen': 'CommonComponent',
  },
}

function getWarpComponent(params) {
  if (!params) console.warn('配置页面参数为空')
  const { screen, screenProps } = params
  switch (screen) {
    case 'CommonComponent':
      return class extends Component {
        render() {
          return (
            <CommonComponent {...this.props} />
          );
        }
      }
      break;
    case 'WarpComponent':
      return class extends Component {
        render() {
          let P = getTabNav(screenProps)
          return (
            <P {...this.props} />
          );
        }
      }
      break;
    default:
  }
}

function getTabNav(params) {
  console.log('传入到Tab的参数', params)
  let d = makeNavConfig(params.childTabs)
  const TabNav = TabNavigator(makeNavConfig(params.childTabs), {
      tabBarPosition: 'top',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarComponent: TabBarTop,
      tabBarOptions: {
        scrollEnabled: true,
        tabStyle: {
          width: 200,
        },
      }
    });
  return class extends Component {
    render() {
      return (
        <TabNav screenProps={this.props.screenProps} />
      );
    }
  }
}

// function getComponent() {
//   return class extends Component {
//     render() {
//       // console.log('getComponent', this.props)
//       return (
//         <CommonComponent screenProps={this.props.screenProps} />
//       );
//     }
//   }
// }

const makeNavConfig = (config = _config) => {
  let navConfig = {}
  Object.keys(config).map((pName, index) => {
    const screenConfig = config[pName]
    const component = getWarpComponent(screenConfig)
    navConfig[pName] = {
      screen: component,
      navigationOptions: ({ navigation }) => ({
        title: (navigation.state.params && navigation.state.params.name) || pName
      })
    }
  })
  return navConfig
}

const RootNavigator = StackNavigator(makeNavConfig(), {
  initialRouteName: 'p1'
})



const AppWithNavigationState = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FaeComponent.CustomerLoading />
      <RootNavigator />
    </View>
  )
};
export default AppWithNavigationState


