/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:23:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 14:32:01
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ReverseFactorNotFinance extends Component {
	static navigationOptions = {
		tabBarLabel: '未融资',
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>ReverseFactorNotFinance</Text>
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
	},
});

//make this component available to the app
export default ReverseFactorNotFinance;
