/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 21:02:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 21:04:06
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FinancingCconfirm extends Component {
	static navigationOptions = {
		title: '融资确认'
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>FinancingCconfirm</Text>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});

//make this component available to the app
export default FinancingCconfirm;
