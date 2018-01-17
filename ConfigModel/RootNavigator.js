
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


function getWarpComponent(params){
  const { componentType } = params
  if (!params) console.warn('配置页面参数为空')
  return class WarpComponent extends Component {

    render() {
      // 这里怎么搞？ 动态的props传进来, 先不考虑redux维护用户信息等乱七八糟的
			/**
			 * 在这里把每一页的参数都注入进去么？
			 * 这里应该传入这个Tabs 中包含多少个子页面吧？诶？柑橘是圈梁信息呢
			 * 包括页面信息: title
			 * 页面请求参数信息
			 * 页面跳转信息
			 */

      /**
       * 这里主要传递有几个tab就行了
       */

      return (
        <TabNav screenProps={params} />
      );
    }
  }
  const mapStateToProps = state => ({
    state: state,
  });
  const Page = connect(mapStateToProps)(WarpComponent);
}

function getComponent() {
  return class extends Component {
    render() {
      console.log('getComponent', this.props)
      return (
        <CommonComponent screenProps={this.props.screenProps} />
      );
    }
  }
}
const config = {
  'CommonCmponent': getComponent,
  'WarpComponent': getWarpComponent
}

const getPage = (key) => {
  return config[key]
}

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
          screen: component(),
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







const TabNav = TabNavigator({
  all: {
    screen: getComponent(),
    navigationOptions: ({ navigtation }) => ({
      title: 'all'
    })
  },
}, {
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





const AppWithNavigationState = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FaeComponent.CustomerLoading />
      <RootNavigator />
    </View>
  )
};
export default AppWithNavigationState


