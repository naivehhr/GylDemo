/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 13:43:42 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 14:17:48
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoanOrderNav from './LoanOrderNav'
import { connect } from 'react-redux';
class LoanOrder extends Component {

	static navigationOptions = () => ({
		title: '用款订单'
	})

	render() {
		return (
			<LoanOrderNav />
		);
	}
}
const mapStateToProps = state => ({
	state: state,
});
export default connect(mapStateToProps)(LoanOrder);

