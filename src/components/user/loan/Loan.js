/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 20:14:03 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-25 18:56:45
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoanTabNav from './LoanTabNav'
import { connect } from 'react-redux';


class Loan extends Component {
	static navigationOptions = {
		title: '用款列表'
	}
	
	render() {
		return (
			<LoanTabNav/>
		);
	}
}
const mapStateToProps = state => ({
	state: state,
});
export default connect(mapStateToProps)(Loan);
