/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:02:37 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-15 13:33:36
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { connect } from 'react-redux';
import ReverseFactorAll from './ReverseFactorAll'
import ReverseFactorNotFinance from './ReverseFactorNotFinance'
import ReverseFactorNoApproval from './ReverseFactorNoApproval'
import ReverseFactorRaised from './ReverseFactorRaised'

const ReverseFactorTabNav = TabNavigator({
  all: { screen: ReverseFactorAll },
  NotFinance: { screen: ReverseFactorNotFinance},
  NoApproval: { screen: ReverseFactorNoApproval},
  Raised1: { screen: ReverseFactorRaised},
  Raised2: { screen: ReverseFactorRaised},
  Raised3: { screen: ReverseFactorRaised},
  Raised4: { screen: ReverseFactorRaised},
  Raised5: { screen: ReverseFactorRaised},
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
class TabsComponent extends Component {
  render(){
    return <View><Text>123</Text></View>
  }
}
export default ReverseFactorTabNav;
