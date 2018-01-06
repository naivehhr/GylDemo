/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 10:22:45 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-06 17:43:26
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';
import LoginPage from './containers/Login'
export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: '详情',
    },
  },
  Login: {
    screen: LoginPage,
    navigationOptions: {
      headerTitle: '登录',
    },
  }
}, {
  initialRouteName: 'Login',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);