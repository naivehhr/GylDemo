/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 14:23:37 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 14:23:57
 */


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class LoadOrderRepayment extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: '还款中',
	});
	render() {
		return (
			<View style={styles.container}>
				<Text>LoadOrderRepayment</Text>
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
export default LoadOrderRepayment;
