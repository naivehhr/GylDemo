/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 20:14:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-25 18:58:40
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import ReverseFactor from './ReverseFactor'
import AccountsReceivable from './AccountsReceivable'
import CashLoans from './CashLoans'
import TicketFinac from './TicketFinac'

const LoanTabNav = TabNavigator({
  ReverseFactor: { screen: ReverseFactor },
  TicketFinac: { screen: TicketFinac },
  CashLoans: { screen: CashLoans },
  AccountsReceivable: { screen: AccountsReceivable },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
});

export default LoanTabNav;
