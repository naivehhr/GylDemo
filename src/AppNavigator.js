/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 10:22:45 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-25 18:50:51
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { FaeComponent } from '@faegroup/common'

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';
// import UserHome from './containers/user/UserHome';
import CoreUserHome from './containers/coreuser/CoreUserHome';
import UserHome from './containers/user/UserHome';
import ReverseFactor from './containers/coreuser/ReverseFactor';
import Approval from './containers/coreuser/Approval'
import LoginPage from './containers/Login'
import Register from './containers/Register'
import Loan from './containers/user/loan/Loan'
import FinancingConfirm from './containers/user/loan/FinancingConfirm'
import LoanOrder from './containers/user/loanorder/LoanOrder'
import LoanOrderDetail from './containers/user/loanorder/LoanOrderDetail'
import Account from './containers/account/Account'
import Agent from './containers/account/Agent'
import EnterpriseInfo from './containers/account/EnterpriseInfo'
import LottieTest from './components/common/LottieTest'
import App from './containers/App'

export const AppNavigator = StackNavigator({
  App: { screen: App},
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
  CoreUserHome: { screen: CoreUserHome },
  ReverseFactor: { screen: ReverseFactor },
  Approval: { screen: Approval },
  UserHome: { screen: UserHome },
  Loan: { screen: Loan },
  FinancingConfirm: { screen: FinancingConfirm },
  LoanOrder: { screen: LoanOrder },
  LoanOrderDetail: { screen: LoanOrderDetail },
  Register: { screen: Register },
  Account: { screen: Account },
  Agent: { screen: Agent },
  EnterpriseInfo: { screen: EnterpriseInfo },
  LottieTest: { screen: LottieTest },
}, {
    initialRouteName: 'App'
  });

const AppWithNavigationState = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FaeComponent.CustomerLoading />
      <AppNavigator />
    </View>
  )
};

const mapStateToProps = state => ({
  state: state,
});

export default connect(mapStateToProps)(AppWithNavigationState);