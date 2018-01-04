/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 10:22:45 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-04 18:22:38
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';

export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);