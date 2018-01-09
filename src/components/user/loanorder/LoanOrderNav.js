/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 14:16:23 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 14:24:48
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import LoanOrderAll from './LoanOrderAll'
import LoanOrderRaising from './LoanOrderRaising'
import LoanOrderApplying from './LoanOrderApplying'
import LoadOrderRepayment from './LoadOrderRepayment'


const LoanOrderNav = TabNavigator({
  LoanOrderAll: { screen: LoanOrderAll },
  LoanOrderRaising: { screen: LoanOrderRaising },
  LoanOrderApplying: { screen: LoanOrderApplying },
  LoadOrderRepayment: { screen: LoadOrderRepayment },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
});

export default LoanOrderNav;