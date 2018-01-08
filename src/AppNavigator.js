/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 10:22:45 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 20:53:25
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';
// import UserHome from './containers/user/UserHome';
import CoreUserHome from './containers/coreuser/CoreUserHome';
import UserHome from './containers/user/UserHome';
import ReverseFactor from './containers/coreuser/ReverseFactor';
import Approval from './containers/coreuser/Approval'
import LoginPage from './containers/Login'
import Loan from './containers/user/Loan'
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
  },
  CoreUserHome: { screen: CoreUserHome},
  ReverseFactor: { screen: ReverseFactor },
  Approval: { screen: Approval },
  UserHome: { screen: UserHome},
  Loan: { screen: Loan },
}, {
  initialRouteName: 'Loan',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);