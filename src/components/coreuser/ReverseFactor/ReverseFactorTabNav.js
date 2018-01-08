/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:02:37 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 20:53:22
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import ReverseFactorAll from './ReverseFactorAll'
import ReverseFactorNotFinance from './ReverseFactorNotFinance'
import ReverseFactorNoApproval from './ReverseFactorNoApproval'
import ReverseFactorRaised from './ReverseFactorRaised'

const ReverseFactorTabNav = TabNavigator({
  all: { screen: ReverseFactorAll },
  NotFinance: { screen: ReverseFactorNotFinance},
  NoApproval: { screen: ReverseFactorNoApproval},
  Raised: { screen: ReverseFactorRaised},
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
});

export default ReverseFactorTabNav;
