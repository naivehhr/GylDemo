/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:28:51 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 19:12:41
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReverseFactorTabNav from './ReverseFactorTabNav'
import { connect } from 'react-redux';


class ReverseFactor extends Component {
	static navigationOptions = {
		title: '反向保理'
	}
	
	render() {
		return (
			<ReverseFactorTabNav/>
		);
	}
}
const mapStateToProps = state => ({
	state: state,
});
export default connect(mapStateToProps)(ReverseFactor);
